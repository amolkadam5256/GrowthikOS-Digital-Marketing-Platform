from __future__ import annotations

from functools import lru_cache
from typing import Literal

from pydantic import field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """All application settings — loaded from .env automatically."""

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra="ignore",
    )

    # ── Application ───────────────────────────────────────────────────────────
    APP_NAME: str = "Digital Marketing Platform"
    ENVIRONMENT: Literal["development", "staging", "production"] = "development"
    DEBUG: bool = True

    # ── Security ──────────────────────────────────────────────────────────────
    SECRET_KEY: str = "CHANGE_ME_IN_PRODUCTION"
    ALLOWED_ORIGINS: str | list[str] = ["http://localhost:3000"]

    @field_validator("ALLOWED_ORIGINS", mode="before")
    @classmethod
    def assemble_origins(cls, v: str | list[str]) -> list[str]:
        if isinstance(v, str):
            if v.startswith("[") and v.endswith("]"):
                import json
                return json.loads(v)
            return [i.strip() for i in v.split(",") if i.strip()]
        return v

    # ── Database ──────────────────────────────────────────────────────────────
    DATABASE_URL: str = "postgresql+asyncpg://dmp_user:dmp_pass@localhost:5432/dmp_db"
    DATABASE_URL_SYNC: str = "postgresql+psycopg2://dmp_user:dmp_pass@localhost:5432/dmp_db"

    # ── Redis / Celery ────────────────────────────────────────────────────────
    REDIS_URL: str = "redis://localhost:6379/0"
    CELERY_BROKER_URL: str = "redis://localhost:6379/1"
    CELERY_RESULT_BACKEND: str = "redis://localhost:6379/2"

    # ── Auth ──────────────────────────────────────────────────────────────────
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    REFRESH_TOKEN_EXPIRE_DAYS: int = 7
    JWT_ALGORITHM: str = "HS256"

    # ── Frontend ──────────────────────────────────────────────────────────────
    FRONTEND_URL: str = "http://localhost:3000"

    @property
    def is_production(self) -> bool:
        return self.ENVIRONMENT == "production"

    @property
    def is_development(self) -> bool:
        return self.ENVIRONMENT == "development"


@lru_cache
def get_settings() -> Settings:
    """Return cached settings instance — call this everywhere."""
    return Settings()
