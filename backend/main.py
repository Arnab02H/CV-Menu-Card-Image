import logging
import traceback
from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Optional
from models import MenuAnalysisResponse, Dish
from dotenv import load_dotenv
from extract_text import extract_menu_from_image, extract_menu_from_text
from services.image_service import get_dish_image_url
from services.ocr_service import extract_text_easyocr
from services.paddle_service import extract_text_paddleocr
import json

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("linguine-api")

load_dotenv()

app = FastAPI(title="Linguine AI Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"status": "ok", "engine": "EasyOCR + DeepTranslate (Modularized)"}

@app.get("/search-image")
async def search_image(dish_name: str):
    if not dish_name:
        raise HTTPException(status_code=400, detail="Dish name is required")
    
    image_url = get_dish_image_url(dish_name)
    if not image_url:
        raise HTTPException(status_code=404, detail="Image not found")
        
    return {"image_url": image_url}

@app.post("/analyze-menu", response_model=MenuAnalysisResponse)
async def analyze_menu(
    images: List[UploadFile] = File(...),
    cuisine: Optional[str] = Form(None),
    spice_level: Optional[str] = Form("medium"),
    dietary_constraints: Optional[str] = Form("[]"),
    budget_sensitivity: Optional[str] = Form(None),
    target_language: Optional[str] = Form("English"),
    extraction_method: Optional[str] = Form("gemini")
):
    logger.info(f"--- New Request (Extraction: {extraction_method}) ---")
    
    try:
        # Parse dietary constraints
        try:
            constraints_list = json.loads(dietary_constraints) if dietary_constraints else []
        except:
            constraints_list = []

        preferences = {
            "cuisine": cuisine,
            "spice_level": spice_level,
            "dietary_constraints": constraints_list,
            "budget_sensitivity": budget_sensitivity,
            "target_language": target_language
        }

        all_dishes = []
        all_raw_texts = []
        for img_file in images:
            image_data = await img_file.read()
            raw_text = None
            # Call the extraction function based on the method
            if extraction_method.lower() == "easyocr":
                logger.info("Extracting text using EasyOCR...")
                raw_text = extract_text_easyocr(image_data)
                dishes_data = extract_menu_from_text(raw_text, preferences)
            elif extraction_method.lower() == "paddleocr":
                logger.info("Extracting text using PaddleOCR...")
                raw_text = extract_text_paddleocr(image_data)
                dishes_data = extract_menu_from_text(raw_text, preferences)
            else:
                logger.info("Extracting text using Gemini Multimodal...")
                dishes_data = extract_menu_from_image(image_data, preferences)
            
            if raw_text:
                all_raw_texts.append(raw_text)

            for d in dishes_data:
                # Ensure all required fields are present; Pydantic will handle types
                all_dishes.append(Dish(**d))

        combined_raw_text = "\n\n--- Next Image ---\n\n".join(all_raw_texts) if all_raw_texts else None
        logger.info(f"Successfully processed menu. Found {len(all_dishes)} items.")
        return MenuAnalysisResponse(dishes=all_dishes, raw_text=combined_raw_text)

    except Exception as e:
        err_msg = str(e)
        logger.error(f"Processing Error: {err_msg}")
        logger.error(traceback.format_exc())
        
        if "429" in err_msg or "RESOURCE_EXHAUSTED" in err_msg:
            raise HTTPException(
                status_code=429, 
                detail="Gemini API Quota Exceeded. Please try again in a few minutes or switch to a different API key."
            )
            
        raise HTTPException(status_code=500, detail=f"Menu Analysis Failed: {err_msg}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
