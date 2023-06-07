### Wet Paddlers API

#### Setup

`poetry install` (should create a venv for you automatically)

#### Run

` uvicorn main:app --reload`

Verify by `GET`ting the root endpoint at http://127.0.0.1:8000/ and checking the response is: `{"message":"Hello World"}`
