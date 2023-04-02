import pathlib
from dataclasses import dataclass
from typing import Awaitable, Callable, Optional

from fastapi import APIRouter, FastAPI, Request, Response
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from starlette.routing import Route

router = APIRouter()


@dataclass
class ResponseModel:
    resp: str


@router.get("/ping", response_model=list[ResponseModel])
async def ping() -> list[ResponseModel]:
    return [ResponseModel(resp="pong")]


def setup_app(
    use_docs: bool,
    static_dir: Optional[str] = None,
) -> FastAPI:
    app = FastAPI()
    docs_list = ["/openapi.json", "/docs", "/docs/oauth2-redirect", "/redoc"]
    if not use_docs:
        routes = []
        for r in app.router.routes:
            if isinstance(r, Route) and r.path in docs_list:
                continue
            routes.append(r)
        routes.append(r)
        app.router.routes = routes
    app.include_router(router, prefix="/api")

    if static_dir is not None:
        app.mount("/", StaticFiles(directory=static_dir, html=True), name="static")

        index_html = pathlib.Path(static_dir) / "index.html"

        @app.middleware("http")
        async def redirect_to_indexhtml(
            request: Request, call_next: Callable[[Request], Awaitable[Response]]
        ) -> Response:
            response = await call_next(request)
            if response.status_code == 404 and index_html.exists():
                return FileResponse(index_html)
            return response

    return app
