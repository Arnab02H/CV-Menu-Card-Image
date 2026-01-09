# 🍝 Linguine AI - Backend Engine

The backend for Linguine AI is a high-performance FastAPI service that orchestrates the heavy lifting of image analysis, AI-driven data extraction, and real-time image searching.

## 🚀 core Technologies

- **FastAPI**: Modern, fast (high-performance) web framework for building APIs.
- **Google Gemini 1.5 Flash**: Leveraged for its multimodal capabilities (Vision + Text) to extract structured menu data.
- **DuckDuckGo Search**: Used to fetch visual representations of dishes in real-time.
- **Pydantic**: Robust data validation and settings management.

## 🔧 Internal Workflow

1.  **Incoming Request**: Receives a multi-part form containing menu images and user preference strings (cuisine, spice level, dietary needs).
2.  **Multimodal Analysis**: The `extract_menu` service sends the image buffer + a specialized prompt to Google Gemini.
3.  **Structured JSON Extraction**: Gemini returns a JSON object containing dish names, descriptions, prices, and dietary tags.
4.  **Enrichment**: The backend cleans the data and can optionally trigger image searches for specific items.
5.  **Response**: Sends a structured `MenuAnalysisResponse` back to the Next.js frontend.

## 🛠️ API Reference

### POST `/analyze-menu`
Main endpoint for processing menu images.

**Payload (Form Data):**
- `images`: List of image files (UploadFile)
- `cuisine`: Preferred cuisine (String)
- `spice_level`: "Low", "Medium", or "High"
- `dietary_constraints`: JSON stringified list (e.g., `["Vegetarian", "Gluten-Free"]`)
- `budget_sensitivity`: String (Optional)

**Response:**
```json
{
  "dishes": [
    {
      "name": "Spicy Miso Ramen",
      "price": "$14.50",
      "description": "A rich, fermented soy bean broth topped with bamboo shoots...",
      "english_name": "Spicy Miso Ramen",
      "dietary_info": ["Non-Veg"],
      "spice_level": "High",
      "matching_score": 95
    }
  ]
}
```

### GET `/search-image`
Fetches a URL for a dish image.

**Query Params:**
- `dish_name`: Name of the dish to search for.

## 📦 Installation & Setup

1.  **Install dependencies**:
    ```bash
    pip install -r requirements.txt
    ```
2.  **Environment Variables**:
    Ensure `GOOGLE_API_KEY` is set in your `.env` file.
3.  **Run Development Server**:
    ```bash
    python main.py
    ```

---
*Maintained by Arnab Bera*
