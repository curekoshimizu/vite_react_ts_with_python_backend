#!/usr/bin/env python

from fastapi import APIRouter, FastAPI

router = APIRouter()
app = FastAPI()


@router.get("/ping")
def ping() -> str:
    return "pong"


app.include_router(router, prefix="/api")
