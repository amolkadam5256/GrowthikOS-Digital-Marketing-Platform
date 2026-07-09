from __future__ import annotations

from typing import Optional

from pydantic import BaseModel


class Token(BaseModel):
    """OAuth2 token response schema."""

    access_token: str
    refresh_token: str
    token_type: str


class TokenPayload(BaseModel):
    """JWT token payload — fields are Optional because they may be absent in malformed tokens."""

    sub: Optional[str] = None
    exp: Optional[int] = None
    type: Optional[str] = None
