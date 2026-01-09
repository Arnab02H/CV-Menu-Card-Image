from pydantic import BaseModel
from typing import List, Optional

class Dish(BaseModel):
    dish_name: str
    price: Optional[str] = None
    description: Optional[str] = None
    translated_name: Optional[str] = None
    is_recommended: bool = False
    match_reason: Optional[str] = None
    calories: Optional[str] = "N/A"
    dietary_tags: List[str] = []
    safety_score: int = 10  # 1-10 based on dietary match
    image_url: Optional[str] = None
    original_language: Optional[str] = None

class MenuAnalysisResponse(BaseModel):
    dishes: List[Dish]
    raw_text: Optional[str] = None

class UserPreferences(BaseModel):
    cuisine: Optional[str] = None
    spice_level: Optional[str] = "medium"  # low, medium, high
    dietary_constraints: List[str] = []
    budget_sensitivity: Optional[str] = None
