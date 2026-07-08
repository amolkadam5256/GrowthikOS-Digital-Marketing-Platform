from datetime import datetime, timezone

def get_utc_now() -> datetime:
    """Return current datetime in UTC timezone."""
    return datetime.now(timezone.utc)
