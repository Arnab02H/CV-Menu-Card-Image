import logging
import random

logger = logging.getLogger("linguine-api")

FOOD_PLACEHOLDERS = [
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
    "https://images.unsplash.com/photo-1490818387583-1b0ba68e1aee?w=600&q=80",
    "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80"
]

def get_dish_image_url(dish_name: str) -> str:
    """
    Searches for a dish image using DuckDuckGo Search.
    Returns the first image URL found, or a fallback if rate limited.
    """
    try:
        from duckduckgo_search import DDGS
        logger.info(f"Searching DuckDuckGo for dish: {dish_name}")
        with DDGS() as ddgs:
            results = ddgs.images(
                keywords=dish_name + " dish food plate",
                region="wt-wt",
                safesearch="Moderate",
                max_results=1
            )
            
            results_list = list(results)
            if results_list:
                image_url = results_list[0].get("image")
                logger.info(f"Found image for {dish_name}: {image_url}")
                return image_url
            else:
                logger.warning(f"No image found for {dish_name}")
                
    except Exception as e:
        logger.warning(f"DuckDuckGo search rate-limited (403) for '{dish_name}'. Using fallback. Error: {e}")
        
    # Return a high-quality food placeholder if blocked
    return random.choice(FOOD_PLACEHOLDERS)

