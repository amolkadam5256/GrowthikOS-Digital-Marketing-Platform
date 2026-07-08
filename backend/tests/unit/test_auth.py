import pytest
from httpx import AsyncClient

@pytest.mark.asyncio
async def test_health_check(client: AsyncClient):
    response = await client.get("/health")
    assert response.status_code == 200
    assert response.json()["status"] == "ok"
    assert response.json()["service"] == "dmp-backend"

@pytest.mark.asyncio
async def test_signup_and_login_flow(client: AsyncClient):
    # 1. Signup a new user
    signup_payload = {
        "email": "testuser@example.com",
        "password": "strongpassword123",
        "name": "Test User",
    }
    signup_response = await client.post("/api/v1/auth/signup", json=signup_payload)
    assert signup_response.status_code == 201
    user_data = signup_response.json()
    assert user_data["email"] == "testuser@example.com"
    assert user_data["name"] == "Test User"
    assert "id" in user_data

    # 2. Login with the new user credentials
    login_payload = {
        "username": "testuser@example.com",
        "password": "strongpassword123",
    }
    login_response = await client.post("/api/v1/auth/login", data=login_payload)
    assert login_response.status_code == 200
    token_data = login_response.json()
    assert "access_token" in token_data
    assert "refresh_token" in token_data
    assert token_data["token_type"] == "bearer"
    assert token_data["user"]["email"] == "testuser@example.com"

@pytest.mark.asyncio
async def test_login_wrong_credentials(client: AsyncClient):
    # Try logging in with non-existent user
    login_payload = {
        "username": "nonexistent@example.com",
        "password": "somepassword",
    }
    response = await client.post("/api/v1/auth/login", data=login_payload)
    assert response.status_code == 401
    assert response.json()["detail"] == "Incorrect email or password"
