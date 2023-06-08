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
                "tippecanoe_input.json",
                "--output=tippecanoe_output.mbtiles",
                "--no-tile-compression",
                "--force"
            ],
            check=True,
        )
        subprocess.run(
            [
                "pmtiles",
                "convert",
                "tippecanoe_output.mbtiles",
                "tippecanoe_output.pmtiles",
            ],
            check=True,
        )
    except Exception as e:
        print("error creating pm tiles")
        print(e)
