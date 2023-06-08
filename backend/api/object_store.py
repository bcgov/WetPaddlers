import logging
from datetime import datetime
from decouple import config
from aiobotocore.session import get_session

logger = logging.getLogger(__name__)

server = config("OBJECT_STORE_SERVER")
user_id = config("OBJECT_STORE_USER_ID")
secret_key = config("OBJECT_STORE_SECRET")
bucket = config("OBJECT_STORE_BUCKET")


async def push_to_object_store():
    session = get_session()
    async with session.create_client(
        "s3",
        endpoint_url=f"https://{server}",
        aws_secret_access_key=secret_key,
        aws_access_key_id=user_id,
    ) as client:
        logger.info("got s3 client")
        filename = "test.pmtiles"
        folder = "pmtiles"
        key = f"{folder}/{filename}"
        "https://nrs.objectstore.gov.bc.ca/gpdqha/pmtiles/test.pmtiles"
        try:
            with open("tippecanoe_input.json", "rb") as f:
                logger.info('Uploading file to "%s"', key)
                now = datetime.now().isoformat()
                resp = await client.put_object(
                    ACL="public-read",
                    Bucket=bucket,
                    Key=key,
                    Body=f,
                    Metadata={
                        "last_modified": now,
                        "create_time": now,
                    },
                )
                logger.info(resp)
                logger.info("Done uploading file")
                return f"https://{server}/{bucket}/{key}"
        except Exception as e:
            logger.error(e)
