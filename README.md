# 🍝 Linguine AI - Intelligent Gastronomy Assistant

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Framework: Next.js](https://img.shields.io/badge/Framework-Next.js-black)](https://nextjs.org/)
[![Backend: FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688)](https://fastapi.tiangolo.com/)
[![AI: Gemini Flash](https://img.shields.io/badge/AI-Gemini%20Flash-blue)](https://deepmind.google/technologies/gemini/)

**Linguine AI** is a cutting-edge menu digitizer and personal food assistant designed to eliminate language barriers and dietary uncertainty while dining globally. Using advanced computer vision and LLMs, it transforms static menu images into interactive, personalized dining experiences.

---

## ✨ Key Features

- **📸 AI Menu Digitization**: Instant extraction of dish names, prices, and descriptions from images.
- **🌍 Real-time Translation**: Deep linguistic support for translating native menu items into English.
- **🛡️ Personal Dietary Guard**: Flagging items based on `Veg`, `Non-Veg`, `Vegan`, `Gluten-Free`, and `Allergy` constraints.
- **🌶️ Preference Matching**: Highlighting the best dishes based on your preferred Cuisine, Spice level, and Budget.
- **🎨 Premium Startup UI**: High-end glassmorphic design, mobile-first responsiveness, and smooth micro-animations.
- **🤖 Support Chatbot**: Integrated AI assistant to help you navigate the platform and answer common questions.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Styling**: Vanilla CSS + Tailwind Concepts
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Backend
- **Framework**: FastAPI (Python)
- **AI Core**: Google Gemini 1.5 Flash Latest
- **Vision**: Google Generative AI Vision

---

## 🚀 Getting Started (Run Locally)

Follow these steps to get a local copy of Linguine AI up and running on your laptop.

### 📋 Prerequisites
- **Node.js** (v18.0.0 or higher)
- **Python** (3.10 or higher)
- **Git**

---

### Step 1: Clone the Repository
```bash
git clone https://github.com/Arnab02H/CV-Menu-Card-Image.git
cd PERCEPTRON-RKMVERI
```

### Step 2: Backend Setup
1. **Navigate to backend**:
   ```bash
   cd backend
   ```
2. **Create a Virtual Environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```
4. **Configure Environment Variables**:
   Create a `.env` file in the `backend/` folder:
   ```env
   GOOGLE_API_KEY=your_gemini_api_key_here
   ```
5. **Start the API Server**:
   ```bash
   uvicorn main:app --reload
   ```
   *The backend will now be running at `http://localhost:8000`*

---

### Step 3: Frontend Setup
1. **Navigate to frontend** (Open a new terminal):
   ```bash
   cd frontend
   ```
2. **Install Packages**:
   ```bash
   npm install
   ```
3. **Run Development Server**:
   ```bash
   npm run dev
   ```
   *The website will now be accessible at `http://localhost:3000`*

---

## 📖 Usage Guide

1. **Launch**: Open your browser to `http://localhost:3000`.
2. **Set Preferences**: Choose your cuisine, spice level, and dietary constraints in the floating command center.
3. **Upload**: Click the `+` button in the input bar and select your menu image.
4. **Analyze**: Hit the white arrow button.
5. **Explore**: Toggle between `Recommended` to see the AI's top picks and `All Items` to see the full digitized menu.

---

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.

---
*Created with love by Arnab Bera.*
