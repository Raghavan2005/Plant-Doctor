from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import uvicorn
import random
import time
import numpy as np
from PIL import Image
import io
import base64
import logging
import sys
import os
from datetime import datetime

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[logging.StreamHandler(sys.stdout)]
)

logger = logging.getLogger("plant-disease-api")

app = FastAPI(title="Plant Disease Detection API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins in development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Simulated model class
class DummyModel:
    def __init__(self):
        self.classes = ["Healthy", "Early Blight", "Late Blight"]
        self.trained = False
        logger.info("Initializing plant disease detection model...")
        
    def train(self):
        """Simulate model training with random metrics"""
        logger.info("Starting model training...")
        epochs = 10
        
        for epoch in range(1, epochs + 1):
            # Simulate training metrics
            train_loss = random.uniform(0.5, 1.0) * (1 - epoch/epochs)
            train_acc = random.uniform(0.7, 0.85) + (epoch/epochs) * 0.15
            val_loss = random.uniform(0.6, 1.2) * (1 - epoch/epochs)
            val_acc = random.uniform(0.65, 0.8) + (epoch/epochs) * 0.15
            
            # Simulate batch processing
            batch_size = 32
            total_batches = 100
            for batch in range(1, total_batches + 1):
                if batch % 25 == 0:
                    batch_loss = random.uniform(0.3, 0.8) * (1 - epoch/epochs)
                    batch_acc = random.uniform(0.75, 0.9) + (epoch/epochs) * 0.1
                    logger.info(f"Epoch {epoch}/{epochs} - Batch {batch}/{total_batches} - Loss: {batch_loss:.4f} - Accuracy: {batch_acc:.4f}")
                time.sleep(0.01)  # Small delay to simulate computation
                
            logger.info(f"Epoch {epoch}/{epochs} - Train Loss: {train_loss:.4f} - Train Accuracy: {train_acc:.4f} - Val Loss: {val_loss:.4f} - Val Accuracy: {val_acc:.4f}")
            
        # Training complete
        self.trained = True
        self.accuracy = random.uniform(0.92, 0.98)
        logger.info(f"Training complete! Final model accuracy: {self.accuracy:.4f}")
        
    def predict(self, image_data, filename):
        """Simulate prediction based on image"""
        if not self.trained:
            logger.warning("Model not trained yet. Training now...")
            self.train()
            
        logger.info(f"Processing image: {filename}")
        
        # Simulate preprocessing steps
        logger.info("Preprocessing image...")
        time.sleep(0.5)
        logger.info("Resizing to 224x224...")
        time.sleep(0.3)
        logger.info("Normalizing pixel values...")
        time.sleep(0.2)
        
        # Make prediction based on if the filename contains 'e' as requested
        if 'e' in filename.lower():
            # If filename contains 'e', randomly select Early or Late Blight
            disease_idx = random.randint(1, 2)  # 1 or 2 (Early or Late Blight)
            confidence = random.uniform(0.85, 0.99)
        else:
            # If filename doesn't contain 'e', select Healthy
            disease_idx = 0  # Healthy
            confidence = random.uniform(0.90, 0.99)
            
        prediction = self.classes[disease_idx]
        
        # Log prediction probability distribution (simulated)
        probs = [random.uniform(0.01, 0.1) for _ in range(3)]
        probs[disease_idx] = confidence
        total = sum(probs)
        probs = [p/total for p in probs]  # Normalize to sum to 1
        
        logger.info("Prediction probabilities:")
        for i, (cls, prob) in enumerate(zip(self.classes, probs)):
            logger.info(f"  {cls}: {prob:.4f}")
        
        logger.info(f"Final prediction: {prediction} with confidence {probs[disease_idx]:.4f}")
        
        # Create response data
        if disease_idx > 0:  # If disease detected
            treatments = {
                "Early Blight": "Apply fungicides containing chlorothalonil or copper. Ensure proper plant spacing for ventilation.",
                "Late Blight": "Apply preventative fungicides. Remove infected plants immediately to prevent spread."
            }
            descriptions = {
                "Early Blight": "Caused by the fungus Alternaria solani. Characterized by brown spots with concentric rings.",
                "Late Blight": "Caused by Phytophthora infestans. Shows water-soaked spots that quickly turn brown with white fungal growth."
            }
            return {
                "status": "Disease Detected",
                "disease": prediction,
                "confidence": round(probs[disease_idx] * 100, 2),
                "description": descriptions[prediction],
                "treatment": treatments[prediction]
            }
        else:
            return {
                "status": "Healthy",
                "disease": "No Disease",
                "confidence": round(probs[disease_idx] * 100, 2),
                "description": "The plant appears healthy with no visible signs of disease.",
                "treatment": "Continue regular care and monitoring."
            }

# Initialize model
model = DummyModel()

@app.on_event("startup")
async def startup_event():
    """Initialize and train model on startup"""
    logger.info("Starting Plant Disease Detection API")
    # Pre-train the model in background to simulate a ready model
    model.train()

@app.get("/")
async def root():
    return {"message": "Plant Disease Detection API is running"}

@app.post("/predict/")
async def predict_disease(file: UploadFile = File(...)):
    """Endpoint to predict disease from plant image"""
    try:
        # Validate file type
        if not file.content_type.startswith("image/"):
            raise HTTPException(status_code=400, detail="File must be an image")
        
        # Read image
        contents = await file.read()
        
        # Simulate detection
        start_time = time.time()
        result = model.predict(contents, file.filename)
        process_time = time.time() - start_time
        
        logger.info(f"Prediction completed in {process_time:.2f} seconds")
        
        # Add timestamp and processing metadata
        result["timestamp"] = datetime.now().isoformat()
        result["processing_time"] = f"{process_time:.2f}s"
        
        return JSONResponse(content=result)
        
    except Exception as e:
        logger.error(f"Error processing image: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Error processing image: {str(e)}")

@app.get("/health/")
async def health_check():
    """Endpoint to check API health"""
    return {
        "status": "healthy",
        "model_trained": model.trained,
        "model_accuracy": getattr(model, "accuracy", None),
        "timestamp": datetime.now().isoformat()
    }

@app.post("/train/")
async def train_model():
    """Endpoint to retrain the model"""
    try:
        logger.info("Manual model training requested")
        model.train()
        return {"status": "success", "message": "Model trained successfully"}
    except Exception as e:
        logger.error(f"Error training model: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Error training model: {str(e)}")

if __name__ == "__main__":
    port = int(os.getenv("PORT", 8000))
    # Use the current file name instead of hardcoding "app:app"
    import pathlib
    current_file = pathlib.Path(__file__).stem
    uvicorn.run(f"{current_file}:app", host="localhost", port=port, reload=True)