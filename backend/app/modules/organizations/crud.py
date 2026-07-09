from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.modules.organizations.models import Organization, OrganizationMember
from app.modules.organizations.schemas import OrganizationCreate

async def get_user_organizations(db: AsyncSession, user_id: int) -> list[Organization]:
    """Retrieve all organizations/workspaces a user belongs to."""
    result = await db.execute(
        select(Organization)
        .join(OrganizationMember)
        .where(OrganizationMember.user_id == user_id)
    )
    return list(result.scalars().all())

async def get_organization_by_id(db: AsyncSession, org_id: int) -> Organization | None:
    """Retrieve an organization by its ID."""
    result = await db.execute(
        select(Organization).where(Organization.id == org_id)
    )
    return result.scalars().first()

async def is_organization_member(db: AsyncSession, org_id: int, user_id: int) -> bool:
    """Check if a user is a member of an organization."""
    result = await db.execute(
        select(OrganizationMember)
        .where(OrganizationMember.org_id == org_id)
        .where(OrganizationMember.user_id == user_id)
    )
    return result.scalars().first() is not None

async def create_organization(db: AsyncSession, org_in: OrganizationCreate, creator_id: int) -> Organization:
    """Create a new organization and assign the creator as the 'owner'."""
    db_org = Organization(name=org_in.name)
    db.add(db_org)
    await db.flush()  # Generate db_org.id

    # Create the owner membership
    db_member = OrganizationMember(
        org_id=db_org.id,
        user_id=creator_id,
        role="owner"
    )
    db.add(db_member)
    await db.flush()
    return db_org

async def get_or_create_default_organization(db: AsyncSession, user_id: int, user_name: str | None) -> Organization:
    """Retrieve user's first workspace, or auto-create a default workspace if none exists."""
    user_orgs = await get_user_organizations(db, user_id)
    if user_orgs:
        return user_orgs[0]

    # Create default workspace
    name = f"{user_name}'s Workspace" if user_name else "My Workspace"
    org_in = OrganizationCreate(name=name)
    return await create_organization(db, org_in, user_id)
