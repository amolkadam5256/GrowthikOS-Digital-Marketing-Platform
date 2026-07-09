import asyncio
import random
from datetime import datetime, timezone

from fastapi import APIRouter, WebSocket, WebSocketDisconnect

router = APIRouter()


def analytics_snapshot() -> dict[str, object]:
    """Demo analytics payload shaped for dashboard widgets."""
    return {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "kpis": [
            {
                "id": "revenue",
                "label": "Revenue",
                "value": 184250,
                "delta": 18.4,
                "format": "currency",
                "sparkline": [128, 132, 141, 156, 151, 168, 184],
            },
            {
                "id": "visitors",
                "label": "Visitors",
                "value": 92840,
                "delta": 12.7,
                "format": "number",
                "sparkline": [68, 74, 82, 80, 91, 96, 104],
            },
            {
                "id": "conversion",
                "label": "Conversion rate",
                "value": 7.8,
                "delta": 2.1,
                "format": "percent",
                "sparkline": [4.6, 5.2, 5.8, 6.1, 6.8, 7.2, 7.8],
            },
            {
                "id": "roas",
                "label": "ROAS",
                "value": 5.6,
                "delta": 0.8,
                "format": "ratio",
                "sparkline": [3.1, 3.8, 4.0, 4.8, 5.1, 5.4, 5.6],
            },
        ],
        "traffic": [
            {"date": "Mon", "organic": 12400, "paid": 8200, "ai": 2800},
            {"date": "Tue", "organic": 13900, "paid": 8800, "ai": 3600},
            {"date": "Wed", "organic": 15800, "paid": 9100, "ai": 4200},
            {"date": "Thu", "organic": 17100, "paid": 10200, "ai": 5100},
            {"date": "Fri", "organic": 16900, "paid": 11800, "ai": 5900},
            {"date": "Sat", "organic": 18100, "paid": 10900, "ai": 6400},
            {"date": "Sun", "organic": 19600, "paid": 12100, "ai": 7200},
        ],
        "channels": [
            {"name": "Organic", "value": 42},
            {"name": "Paid", "value": 28},
            {"name": "AI Search", "value": 18},
            {"name": "Referral", "value": 12},
        ],
        "campaigns": [
            {
                "campaign": "AI Visibility Sprint",
                "channel": "Organic",
                "spend": 12400,
                "leads": 842,
                "roas": 6.4,
                "status": "Scaling",
            },
            {
                "campaign": "Pune Local SEO",
                "channel": "Search",
                "spend": 7200,
                "leads": 418,
                "roas": 5.9,
                "status": "Healthy",
            },
            {
                "campaign": "Enterprise Retargeting",
                "channel": "Meta",
                "spend": 18800,
                "leads": 621,
                "roas": 4.2,
                "status": "Watch",
            },
            {
                "campaign": "WhatsApp Nurture",
                "channel": "CRM",
                "spend": 2900,
                "leads": 306,
                "roas": 8.1,
                "status": "Automated",
            },
        ],
    }


@router.get("/overview")
def get_analytics_overview() -> dict[str, object]:
    return analytics_snapshot()


@router.websocket("/ws")
async def analytics_stream(websocket: WebSocket) -> None:
    await websocket.accept()
    try:
        while True:
            await websocket.send_json(
                {
                    "active_visitors": random.randint(180, 420),
                    "events_per_minute": random.randint(900, 1800),
                    "conversion_rate": round(random.uniform(6.8, 8.4), 2),
                    "campaign_health": random.choice(["Healthy", "Scaling", "Watch"]),
                    "generated_at": datetime.now(timezone.utc).isoformat(),
                }
            )
            await asyncio.sleep(2)
    except WebSocketDisconnect:
        return
