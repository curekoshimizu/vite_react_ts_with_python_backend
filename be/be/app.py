from dataclasses import dataclass

from fastapi import APIRouter, FastAPI
from fastapi.staticfiles import StaticFiles

router = APIRouter()


@dataclass
class Response:
    resp: str


@router.get("/ping", response_model=list[Response])
async def ping() -> list[Response]:
    return [Response(resp="pong")]


app = FastAPI()
app.include_router(router, prefix="/api")
app.mount("/", StaticFiles(directory="../fe/dist/", html=True), name="static")
