import logging
from fastapi import FastAPI, Response
from pydantic_geojson import FeatureCollectionModel

logger = logging.getLogger(__name__)

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/geo")
async def geo(geo: FeatureCollectionModel, response: Response):
    logger.info("New geo posted: %s", str(geo))
