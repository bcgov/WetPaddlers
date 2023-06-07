import subprocess
from pydantic_geojson import FeatureCollectionModel


def process_geojson(feature_collection: FeatureCollectionModel):
    try:
        with open("tippecanoe_input.json", "w") as f:
            f.write(feature_collection.json())
    except Exception as e:
        print(e)
    try:
        subprocess.run(
            [
                "tippecanoe",
                "-zg",
                "--projection=EPSG:4326",
                "tippecanoe_input.json",
                "--output=tippecanoe_output.pmtiles",
                "--no-tile-compression",
            ],
            check=True,
        )
    except Exception as e:
        print("error creating pm tiles")
        print(e)
