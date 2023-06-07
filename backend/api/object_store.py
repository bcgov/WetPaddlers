import logging
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
