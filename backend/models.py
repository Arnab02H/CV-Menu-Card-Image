from pydantic import BaseModel
from typing import List, Optional

class Dish(BaseModel):
    dish_name: str
    price: str
    currency: str
    description: str
    language_original: str
    translated_name: str

class MenuAnalysisResponse(BaseModel):
    dishes: List[Dish]
    raw_text: Optional[str] = None

class UserPreferences(BaseModel):
    cuisine: Optional[str] = None
    spice_level: Optional[str] = "medium"  # low, medium, high
    dietary_constraints: List[str] = []
    budget_sensitivity: Optional[str] = None
