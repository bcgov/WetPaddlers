import { all, put, select, takeEvery } from "redux-saga/effects";
import { URL_CHANGE} from "../actions";
import layerAndURLState from "../reducers/layerAndStateReducer";




function* handle_ADD_LAYER(action: any) {


  console.log('handle_ADD_LAYER')
  const existingState = yield select(layerAndURLState, (state: any) => state.layers)


  const layerArrayBefore = existingState?.layerAndURLState?.layers

  let newLayerArray = []

  if(layerArrayBefore?.length > 0) {
    newLayerArray.push(...layerArrayBefore)
  }

  const newLayer = {
    name: action.payload.name,
    color: action.payload.color,
    s3_url: action.payload.s3_url,
    type: action.payload.type,
    label_property: action.payload.label_property
  }

  newLayerArray.push(newLayer)
  history.pushState(null, '', `?layers=${JSON.stringify(newLayerArray)}`)
}

export function* mapSaga() {
  yield all([ takeEvery('ADD_LAYER', handle_ADD_LAYER)]);
}
