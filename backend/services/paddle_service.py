import logging
import io
from PIL import Image
import numpy as np

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("paddle-service")

# Initialize PaddleOCR (Local)
try:
    from paddleocr import PaddleOCR
    # use_angle_cls=True to automatically rotate the image if needed
    ocr = PaddleOCR(use_angle_cls=True, lang='en')
    logger.info("PaddleOCR initialized successfully.")
except Exception as e:
    logger.error(f"Failed to initialize PaddleOCR: {e}")
    ocr = None

def extract_text_paddleocr(image_data: bytes) -> str:
    """
    Extracts raw text from an image using PaddleOCR.
    """
    if ocr is None:
        logger.error("PaddleOCR is not initialized.")
        return ""
        
    try:
        # PaddleOCR expects a numpy array
        image = Image.open(io.BytesIO(image_data)).convert("RGB")
        img_array = np.array(image)
        
        results = ocr.ocr(img_array, cls=True)
        
        if not results or not results[0]:
            return ""
            
        # results is a list of lists: [[box, (text, confidence)], ...]
        # Sort results by vertical position (y-coordinate) to read top-to-bottom
        lines = results[0]
        lines.sort(key=lambda x: x[0][0][1])
        
        extracted_text = "\n".join([line[1][0] for line in lines])
        return extracted_text
    except Exception as e:
        logger.error(f"PaddleOCR Extraction failed: {e}")
        return ""
