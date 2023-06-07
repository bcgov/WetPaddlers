import logging
from fastapi import FastAPI, Response
from pydantic_geojson import FeatureCollectionModel
from .tippecanoe import process_geojson
from .object_store import push_to_object_store

logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.INFO)

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/geo")
async def geo(geo: FeatureCollectionModel, response: Response):
    logger.info("New geo posted: %s", str(geo))
    process_geojson(geo)
    await push_to_object_store()
