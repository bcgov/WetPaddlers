import logging
from fastapi import FastAPI, Response
from fastapi.middleware.cors import CORSMiddleware
from .tippecanoe import process_geojson
from .object_store import push_to_object_store

logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.INFO)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins="*",
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/geo")
async def geo(geo: dict, response: Response):
    logger.info("New geo posted: %s", str(geo))
    process_geojson(geo)
    name=geo.get("name", "unknown")
    object_store_url = await push_to_object_store(name)
    return {"object_store_url": object_store_url}
