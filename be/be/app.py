from dataclasses import dataclass
from typing import Optional

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


def setup_app(
    use_docs: bool,
    static_dir: Optional[str] = None,
) -> None:
    if not use_docs:
        # disable docs routers which has been already registered in constructor
        app.router.routes = []
    app.include_router(router, prefix="/api")
    if static_dir is not None:
        app.mount("/", StaticFiles(directory=static_dir, html=True), name="static")
