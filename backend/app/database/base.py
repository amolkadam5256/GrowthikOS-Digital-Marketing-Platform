from sqlalchemy.orm import DeclarativeBase, declared_attr


class Base(DeclarativeBase):
    """Base class for all SQLAlchemy ORM models in the system.

    Uses SQLAlchemy 2.0-style ``DeclarativeBase`` instead of the deprecated
    ``as_declarative()`` / ``declarative_base()`` helpers.
    """

    # Generate __tablename__ automatically from the class name
    @declared_attr.directive
    def __tablename__(cls) -> str:  # noqa: N805
        return cls.__name__.lower()
