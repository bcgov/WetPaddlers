from pydantic_geojson import FeatureCollectionModel


def process_geojson(feature_collection: FeatureCollectionModel):
    try:
        with open("tippecanoe_input.json", "w") as f:
            f.write(feature_collection.json())
    except Exception as e:
        print(e)
