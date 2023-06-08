import json
import subprocess


def process_geojson(feature_collection: dict):
    try:
        with open("tippecanoe_input.json", "w") as f:
            f.write(json.dumps(feature_collection))
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
