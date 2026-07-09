from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.security import hash_password
from app.modules.users.models import User
from app.modules.users.schemas import UserCreate


async def get_user_by_email(db: AsyncSession, email: str) -> User | None:
    """Return the user with the given email, or None if not found."""
    result = await db.execute(select(User).where(User.email == email))
    return result.scalars().first()


async def create_user(db: AsyncSession, user_in: UserCreate) -> User:
    """Create and persist a new user record.

    Notes:
        We use ``flush`` rather than ``commit`` here because the ``get_db``
        dependency (session context manager) owns the transaction lifecycle.
        Calling ``commit`` inside CRUD would close the transaction too early
        and prevent the dependency from rolling back on errors.
    """
    db_user = User(
        email=user_in.email,
        hashed_password=hash_password(user_in.password),
        name=user_in.name,
        is_active=True,
        is_superuser=False,
    )
    db.add(db_user)
    await db.flush()      # send INSERT to DB; session manager will commit
    await db.refresh(db_user)  # reload server-generated fields (id, created_at)
    return db_user
