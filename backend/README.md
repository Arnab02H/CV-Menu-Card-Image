# Linguine AI Backend

This is the Python backend for Linguine AI, handling menu image analysis, translation, and structured data extraction.

## Features
- **AI Vision**: Uses Google Gemini 1.5 Flash to analyze menu images.
- **Structured Extraction**: Extracts dish names, prices, and descriptions into JSON.
- **Multilingual Support**: Automatically detects and translates dishes to English.
- **Preference Aware**: Considers user cuisine and dietary constraints during analysis.

## Setup

1. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

2. **Configure Environment**:
   - Rename `.env.example` to `.env`.
   - Add your Google API Key (`GOOGLE_API_KEY`).

3. **Run the Server**:
   ```bash
   python main.py
   ```
   The API will be available at `http://localhost:8000`.

## API Endpoints

### POST `/analyze-menu`
Analyzes menu images and extracts dishes.
- **Payload**: `multipart/form-data`
  - `images`: List of files
  - `cuisine`: string (optional)
  - `spice_level`: string ("low", "medium", "high")
  - `dietary_constraints`: stringified list (e.g., `["Vegetarian"]`)
- **Returns**: JSON object with `dishes` list.
