from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.modules.users.models import User
from app.modules.users.schemas import UserCreate
from app.core.security import hash_password

async def get_user_by_email(db: AsyncSession, email: str) -> User | None:
    result = await db.execute(select(User).where(User.email == email))
    return result.scalars().first()

async def create_user(db: AsyncSession, user_in: UserCreate) -> User:
    db_user = User(
        email=user_in.email,
        hashed_password=hash_password(user_in.password),
        name=user_in.name,
        is_active=True,
        is_superuser=False,
    )
    db.add(db_user)
    await db.commit()
    await db.refresh(db_user)
    return db_user
