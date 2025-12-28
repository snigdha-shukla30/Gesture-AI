from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# 🔹 CORS (frontend ko allow karne ke liye)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Backend connected successfully"}

@app.post("/predict")
def predict(data: dict):
    # Abhi sirf dummy response le rhe hai 
    return {
        "gesture": "HELLO",
        "confidence": 0.95
    }
