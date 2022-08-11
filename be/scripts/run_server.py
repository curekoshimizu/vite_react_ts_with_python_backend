#!/usr/bin/env python

import click
import uvicorn  # type:ignore

from be.app import app


@click.command()
@click.option("--port", default=13000, help="port number")
@click.option("--reload", is_flag=True, help="enable hot reload")
def main(port: int, reload: bool) -> None:
    # document urls
    print("[document urls]")
    print(" * redoc url : ", app.redoc_url)
    print(" * docs_url : ", app.docs_url)
    print(" * openapi_url : ", app.openapi_url)
    uvicorn.run("be.app:app", host="0.0.0.0", port=port, log_level="info", reload=reload)


if __name__ in "__main__":
    main()
