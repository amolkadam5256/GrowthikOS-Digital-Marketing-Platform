# Backend Service (FastAPI)

## Purpose
This directory contains the core backend API for the Digital Marketing Platform, built with FastAPI. It handles business logic, database operations, background jobs, and API endpoints.

## Foundation Architecture
The architecture is designed to be highly modular. By centralizing core functionality (Authentication, Database, Background Jobs, etc.), any new tools or modules can easily hook into this infrastructure.

- `app/api/`: Routing and endpoints (e.g., `v1`).
- `app/core/`: Application configuration, security, and dependencies.
- `app/crud/`: Reusable Create, Read, Update, Delete logic.
- `app/db/`: Database session management and migrations (Alembic).
- `app/models/`: SQLAlchemy ORM models.
- `app/schemas/`: Pydantic models for data validation.
- `app/services/`: External integrations (e.g., payment gateways, email).
- `app/tests/`: Pytest test suites.

## Getting Started

1. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Run the development server:
   ```bash
   uvicorn app.main:app --reload
   ```
