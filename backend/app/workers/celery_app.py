from celery import Celery
from app.core.config import get_settings

settings = get_settings()

celery_app = Celery(
    "dmp_tasks",
    broker=settings.CELERY_BROKER_URL,
    backend=settings.CELERY_RESULT_BACKEND,
)

# Standard celery configuration
celery_app.conf.update(
    task_serializer="json",
    result_serializer="json",
    accept_content=["json"],
    timezone="UTC",
    enable_utc=True,
)

# Autodiscover tasks in modules/ features
# celery_app.autodiscover_tasks(['app.modules.some_module'])
