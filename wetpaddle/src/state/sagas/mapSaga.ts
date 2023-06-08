import { all, put, takeEvery } from "redux-saga/effects";
import { URL_CHANGE} from "../actions";




function* handle_URL_CHANGE(action: any) {

}

export function* mapSaga() {
  yield all([takeEvery(URL_CHANGE, handle_URL_CHANGE)]);
}
