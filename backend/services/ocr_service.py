import logging
import easyocr

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("ocr-service")

# Initialize EasyOCR Reader (Local)
try:
    reader = easyocr.Reader(['en', 'fr', 'it', 'es', 'de']) # Support major European languages
    logger.info("EasyOCR Reader initialized successfully.")
except Exception as e:
    logger.error(f"Failed to initialize EasyOCR: {e}")

def extract_text_easyocr(image_data: bytes) -> str:
    """
    Extracts raw text from an image using EasyOCR.
    """
    try:
        results = reader.readtext(image_data)
        # Sort results by vertical position (y-coordinate) to read top-to-bottom
        results.sort(key=lambda x: x[0][0][1])
        # Join the text parts
        extracted_text = "\n".join([text for bbox, text, prob in results])
        return extracted_text
    except Exception as e:
        logger.error(f"EasyOCR Extraction failed: {e}")
        return ""
