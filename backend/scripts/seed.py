import asyncio
from sqlalchemy.future import select
from app.core.config import get_settings
from app.database.session import async_session
from app.modules.users.models import User
from app.core.security import hash_password

settings = get_settings()

async def seed_admin():
    print("Seeding database...")
    async with async_session() as session:
        try:
            # Check if admin already exists
            result = await session.execute(select(User).where(User.email == "admin@example.com"))
            admin = result.scalars().first()
            
            if admin:
                print("Admin user already exists!")
            else:
                db_user = User(
                    email="admin@example.com",
                    hashed_password=hash_password("Admin@12345"),
                    name="Growthik Admin",
                    is_active=True,
                    is_superuser=True,
                )
                session.add(db_user)
                await session.commit()
                print("Successfully created admin superuser (admin@example.com / Admin@12345)!")
        except Exception as e:
            await session.rollback()
            print(f"Error seeding database: {e}")
            raise

if __name__ == "__main__":
    asyncio.run(seed_admin())
