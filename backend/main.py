from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
import base64
import io
from PIL import Image
import numpy as np

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],  
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
 
    try:
       
        if request.image:
          
            image_data = request.image.split(",")[1] if "," in request.image else request.image
            image_bytes = base64.b64decode(image_data)
            image = Image.open(io.BytesIO(image_bytes))
            
            # Convert to RGB if needed
            if image.mode != "RGB":
                image = image.convert("RGB")
            
            # TODO: Replace with actual ML model inference
            gestures = ["HELLO", "THANK YOU", "YES", "NO", "PLEASE", "SORRY", "GOODBYE", "HOW ARE YOU"]
            
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
