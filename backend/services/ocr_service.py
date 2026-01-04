import logging
import easyocr
from deep_translator import GoogleTranslator

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("ocr-service")

# Initialize EasyOCR Reader (Local)
try:
    reader = easyocr.Reader(['en', 'fr', 'it', 'es', 'de']) # Support major European languages
    logger.info("EasyOCR Reader initialized successfully.")
except Exception as e:
    logger.error(f"Failed to initialize EasyOCR: {e}")

# Initialize Translator
translator = GoogleTranslator(source='auto', target='en')

def parse_menu_text(text_results):
    """
    Heuristic parser to convert raw OCR lines into structured dishes.
    It looks for [Dish Name], followed by optional [Description], followed by [Price].
    """
    dishes = []
    
    # Sort results by vertical position (y-coordinate) to read top-to-bottom
    text_results.sort(key=lambda x: x[0][0][1])

    current_item = {"name": "", "desc": "", "price": "None", "currency": ""}

    for i, (bbox, text, prob) in enumerate(text_results):
        text = text.strip()
        if len(text) < 2: continue
        
        # Heuristic for price detection
        has_digits = any(char.isdigit() for char in text)
        is_price = has_digits and (len(text) < 10) and ('.' in text or ',' in text or any(s in text for s in '$€£¥') or text.isdigit())
        
        if is_price:
            currency = ""
            for s in "$€£¥":
                if s in text:
                    currency = s
                    break
            
            clean_price = "".join(c for c in text if c.isdigit() or c in '.,')
            
            if current_item["name"]:
                # Translation Step
                name_en = current_item["name"]
                desc_en = current_item["desc"]
                try:
                    name_en = translator.translate(current_item["name"])
                    if current_item["desc"]:
                        desc_en = translator.translate(current_item["desc"])
                except Exception as e:
                    logger.warning(f"Translation failed: {e}")

                dishes.append({
                    "dish_name": current_item["name"],
                    "price": clean_price,
                    "currency": currency or "$",
                    "description": desc_en or "Delicious freshly prepared dish.",
                    "language_original": "Detected",
                    "translated_name": name_en
                })
                # Reset for next item
                current_item = {"name": "", "desc": "", "price": "None", "currency": ""}
        else:
            # If we don't have a name yet, this is the name
            if not current_item["name"]:
                current_item["name"] = text
            else:
                # If we have a name, this text might be the description
                if current_item["desc"]:
                    current_item["desc"] += " " + text
                else:
                    current_item["desc"] = text

    # Final cleanup for orphaned items (items without a price)
    if current_item["name"]:
        name_en = current_item["name"]
        try:
            name_en = translator.translate(current_item["name"])
        except: pass
        
        dishes.append({
            "dish_name": current_item["name"],
            "price": "None",
            "currency": "",
            "description": current_item["desc"] or "N/A",
            "language_original": "Detected",
            "translated_name": name_en
        })
        
    return dishes

async def analyze_image(image_data: bytes):
    """
    Runs OCR and parsing on a single image.
    """
    results = reader.readtext(image_data)
    return parse_menu_text(results)
