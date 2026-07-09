"""Alembic environment — supports both offline and online migration modes.

Online mode uses a *synchronous* psycopg2 connection (DATABASE_URL_SYNC) so
that Alembic can control the transaction directly without asyncio overhead.
"""

from logging.config import fileConfig

from sqlalchemy import create_engine, pool

from alembic import context

# ── Alembic config object ─────────────────────────────────────────────────────
config = context.config

# Set up Python logging as configured in alembic.ini
if config.config_file_name is not None:
    fileConfig(config.config_file_name)

# ── Import models so autogenerate can detect schema changes ───────────────────
from app.core.config import get_settings
from app.database import Base
from app.modules.users.models import User  # noqa: F401 — required for autogenerate

target_metadata = Base.metadata

settings = get_settings()


# ── Offline migrations ────────────────────────────────────────────────────────

def run_migrations_offline() -> None:
    """Emit SQL to stdout without connecting to the database."""
    url = settings.DATABASE_URL_SYNC
    context.configure(
        url=url,
        target_metadata=target_metadata,
        literal_binds=True,
        dialect_opts={"paramstyle": "named"},
    )
    with context.begin_transaction():
        context.run_migrations()


# ── Online migrations ─────────────────────────────────────────────────────────

def do_run_migrations(connection) -> None:
    context.configure(connection=connection, target_metadata=target_metadata)
    with context.begin_transaction():
        context.run_migrations()


def run_migrations_online() -> None:
    """Connect to the database using a synchronous engine and run migrations.

    We use the *synchronous* DATABASE_URL_SYNC (psycopg2) here because Alembic
    itself is synchronous — wrapping async engines adds unnecessary complexity.
    """
    connectable = create_engine(
        settings.DATABASE_URL_SYNC,
        poolclass=pool.NullPool,
    )
    with connectable.connect() as connection:
        do_run_migrations(connection)
    connectable.dispose()


# ── Entry point ───────────────────────────────────────────────────────────────

if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()
