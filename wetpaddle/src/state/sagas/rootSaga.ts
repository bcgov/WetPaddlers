import { mapSaga } from "./mapSaga"
import { spawn } from 'redux-saga/effects'

export default function* rootSaga() {
    yield spawn(mapSaga)
  }

