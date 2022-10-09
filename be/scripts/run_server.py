#!/usr/bin/env python

import pathlib

import click
import uvicorn  # type:ignore

from be.app import app, setup_app


@click.command()
@click.option("--port", default=8080, help="port number")
@click.option("--docs", is_flag=True, help="enable documents")
@click.option("--static", default="../fe/dist", help="static files built by fe dir")
def main(port: int, docs: bool, static: str) -> None:
    setup_app(use_docs=docs, static_dir=static if pathlib.Path(static).exists() else None)

    # document urls
    if docs:
        print("[document urls]")
        print(" * redoc url : ", app.redoc_url)
        print(" * docs_url : ", app.docs_url)
        print(" * openapi_url : ", app.openapi_url)
    uvicorn.run("be.app:app", host="0.0.0.0", port=port, log_level="info")


if __name__ in "__main__":
    main()
