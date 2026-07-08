from fastapi import APIRouter

router = APIRouter()

@router.get("/me")
async def get_current_user():
    """Mock get current user endpoint."""
    return {
        "id": 1,
        "email": "admin@example.com",
        "name": "Administrator",
        "is_active": True,
        "role": "admin",
    }
