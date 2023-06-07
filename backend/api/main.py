import logging
from fastapi import FastAPI, Response
from pydantic_geojson import FeatureCollectionModel
from . import tippecanoe
from fastapi.middleware.cors import CORSMiddleware

logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.INFO)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins='*',
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/geo")
async def geo(geo: FeatureCollectionModel, response: Response):
    logger.info("New geo posted: %s", str(geo))
    tippecanoe.process_geojson(geo)
