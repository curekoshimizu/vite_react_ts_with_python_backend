#!/usr/bin/env python

import uvicorn  # type:ignore

from be.app import app


def main() -> None:
    uvicorn.run(app, host="0.0.0.0", port=13000, log_level="info")


if __name__ in "__main__":
    main()
