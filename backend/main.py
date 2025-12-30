from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
import base64
import io
from PIL import Image
import numpy as np

app = FastAPI()

# 🔹 CORS (frontend ko allow karne ke liye)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],  # frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class GestureRequest(BaseModel):
    image: Optional[str] = None
    timestamp: Optional[int] = None
    page: Optional[str] = None

@app.get("/")
def home():
    return {"message": "Backend connected successfully"}

@app.post("/predict")
def predict(request: GestureRequest):
    """
    Gesture recognition endpoint
    Accepts image data (base64) and returns detected gesture
    """
    try:
        # If image is provided, process it
        if request.image:
            # Decode base64 image
            image_data = request.image.split(",")[1] if "," in request.image else request.image
            image_bytes = base64.b64decode(image_data)
            image = Image.open(io.BytesIO(image_bytes))
            
            # Convert to RGB if needed
            if image.mode != "RGB":
                image = image.convert("RGB")
            
            # Here you would normally:
            # 1. Preprocess the image (resize, normalize, etc.)
            # 2. Run it through your ML model
            # 3. Get the gesture prediction
            
            # For now, return a dummy response
            # TODO: Replace with actual ML model inference
            gestures = ["HELLO", "THANK YOU", "YES", "NO", "PLEASE", "SORRY", "GOODBYE", "HOW ARE YOU"]
            
            # Simple dummy logic based on timestamp (for demo)
            gesture_index = (request.timestamp or 0) % len(gestures)
            detected_gesture = gestures[gesture_index]
            
            return {
                "gesture": detected_gesture,
                "confidence": 0.95,
                "timestamp": request.timestamp,
                "status": "success"
            }
        else:
            # If no image, just return connection success
            return {
                "message": "Backend connected",
                "page": request.page or "unknown",
                "status": "connected"
            }
    except Exception as e:
        return {
            "error": str(e),
            "gesture": "UNKNOWN",
            "confidence": 0.0,
            "status": "error"
        }
