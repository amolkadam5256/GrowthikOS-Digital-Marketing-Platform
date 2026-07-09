from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

# Member schemas
class OrganizationMemberBase(BaseModel):
    user_id: int
    role: str = "member"

class OrganizationMemberCreate(OrganizationMemberBase):
    pass

class OrganizationMemberInDB(OrganizationMemberBase):
    id: int
    org_id: int
    created_at: datetime

    model_config = {"from_attributes": True}

# Organization schemas
class OrganizationBase(BaseModel):
    name: str

class OrganizationCreate(OrganizationBase):
    pass

class OrganizationUpdate(BaseModel):
    name: Optional[str] = None

class OrganizationInDB(OrganizationBase):
    id: int
    created_at: datetime
    updated_at: Optional[datetime] = None

    model_config = {"from_attributes": True}
