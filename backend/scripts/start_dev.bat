@echo off
echo Starting FastAPI development server...
venv\Scripts\uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
pause
