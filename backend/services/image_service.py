from duckduckgo_search import DDGS
import logging

logger = logging.getLogger("linguine-api")

def get_dish_image_url(dish_name: str) -> str:
    """
    Searches for a dish image using DuckDuckGo Search.
    Returns the first image URL found.
    """
    try:
        logger.info(f"Searching DuckDuckGo for dish: {dish_name}")
        with DDGS() as ddgs:
            results = ddgs.images(
                keywords=dish_name,
                region="wt-wt",
                safesearch="Off",
                size="Medium",
                max_results=1
            )
            
            results_list = list(results)
            if results_list:
                image_url = results_list[0].get("image")
                logger.info(f"Found image for {dish_name}: {image_url}")
                return image_url
            else:
                logger.warning(f"No image found for {dish_name}")
                return None
    except Exception as e:
        logger.error(f"Error searching for image for {dish_name}: {e}")
        return None
