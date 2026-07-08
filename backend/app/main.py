from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import get_settings
from app.api.v1.api import api_router
from app.middleware.logging import RequestLoggingMiddleware

settings = get_settings()

app = FastAPI(
    title=settings.APP_NAME,
    description="FastAPI Backend for Digital Marketing Platform.",
    version="0.1.0",
    debug=settings.DEBUG,
)

# Apply CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Apply Logging Middleware
app.add_middleware(RequestLoggingMiddleware)

# Include API Router
app.include_router(api_router, prefix="/api/v1")

@app.get("/health", tags=["health"])
def health_check():
    """Liveness probe / health check."""
    return {
        "status": "ok",
        "service": "dmp-backend",
        "environment": settings.ENVIRONMENT,
    }
