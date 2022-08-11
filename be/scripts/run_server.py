#!/usr/bin/env python

import click
import uvicorn  # type:ignore

from be.app import app


@click.command()
@click.option("--port", default=13000, help="port number")
def main(port: int) -> None:
    # TODO: hotreload
    uvicorn.run(app, host="0.0.0.0", port=port, log_level="info")


if __name__ in "__main__":
    main()
