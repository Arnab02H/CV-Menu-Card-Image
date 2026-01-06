from google import genai
from PIL import Image
import os
import io
import json
import re
from typing import List, Dict, Any
from dotenv import load_dotenv

load_dotenv()
API_KEY = os.getenv("GOOGLE_API_KEY")

if not API_KEY:
    raise ValueError("API_KEY not found in environment variables.")

client = genai.Client(api_key=API_KEY)

def extract_menu(image_bytes: bytes, preferences: Dict[str, Any] = None) -> List[Dict[str, Any]]:
    try:
        image = Image.open(io.BytesIO(image_bytes))
    except Exception as e:
        print(f"Error opening image: {e}")
        return []

    pref_text = ""
    if preferences:
        pref_text = f"""
        User Preferences:
        - Cuisine Preference: {preferences.get('cuisine', 'Any')}
        - Spice Tolerance: {preferences.get('spice_level', 'Medium')}
        - Dietary Constraints: {', '.join(preferences.get('dietary_constraints', []))}
        - Budget Sensitivity: {preferences.get('budget_sensitivity', 'Normal')}
        """

    prompt = f"""
    You are an expert menu analyzer and food recommender.
    
    STEP 1: Identify and extract EVERY SINGLE DISH/ITEM visible on the menu.
    STEP 2: Evaluate matching items based on user preferences.
    
    {pref_text}
    
    CRITICAL RULES:
    - If "Veg" is selected, ONLY dishes with no meat/seafood are recommended.
    - If "Non-Veg" is selected, prioritize dishes with meat/seafood.
    - If "Allergies" is selected, identify any common allergens (Nuts, Dairy, Shellfish, etc.) and lower the safety_score accordingly if present.
    - {preferences.get('spice_level', 'Medium')} spice level MUST be respected.
    
    For each dish found, extract:
    1. dish_name: The name of the dish as it appears on the menu.
    2. price: The price with currency (e.g., "$12.99" or "₹450").
    3. description: A short, appetizing description in English.
    4. translated_name: English name if the original is not in English.
    5. original_language: The language the menu is written in.
    6. is_recommended: Boolean. True ONLY if it strictly fits ALL user preferences and dietary constraints.
    7. match_reason: Explain EXACTLY how it matches (or conflicts with) the user's dietary tags and preferences.
    8. calories: Estimated calories (e.g., "450" or "Low").
    9. dietary_tags: List of tags like ["Veg", "Non-Veg", "Vegan", "GF", "Spicy", "Nut-Free"].
    10. safety_score: Integer 1-10 (10 = perfectly safe/compatible, 1 = dangerous/incompatible).

    Return ONLY a valid JSON array of objects. No markdown, no intro/outro.
    """

    try:
        response = client.models.generate_content(
            model="gemini-flash-latest",
            contents=[prompt, image]
        )
        
        text_response = response.text
        
        # Enhanced JSON extraction
        json_match = re.search(r'\[.*\]', text_response, re.DOTALL)
        if json_match:
            text_response = json_match.group(0)
        
        return json.loads(text_response)

    except Exception as e:
        print(f"Gemini API Error: {e}")
        raise e
