import logging
import traceback
from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Optional
from models import MenuAnalysisResponse
from dotenv import load_dotenv
from services.ocr_service import analyze_image

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

@app.post("/analyze-menu", response_model=MenuAnalysisResponse)
async def analyze_menu(
    images: List[UploadFile] = File(...),
    cuisine: Optional[str] = Form(None),
    spice_level: Optional[str] = Form("medium"),
    dietary_constraints: Optional[str] = Form("[]"),
    budget_sensitivity: Optional[str] = Form(None)
):
    logger.info("--- New Request (Modularized Backend) ---")
    
    try:
        all_dishes = []
        for img_file in images:
            image_data = await img_file.read()
            dishes = await analyze_image(image_data)
            all_dishes.extend(dishes)

        logger.info(f"Successfully processed menu. Found {len(all_dishes)} items.")
        return MenuAnalysisResponse(dishes=all_dishes)

    except Exception as e:
        logger.error(f"Processing Error: {e}")
        logger.error(traceback.format_exc())
        raise HTTPException(status_code=500, detail=f"Menu Analysis Failed: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
