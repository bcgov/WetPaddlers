import { URL_CHANGE } from "../actions";


const initialState: { url: string } = {
  url: ''
};

export default function layerAndURLStateReducer(state = initialState, action: any) {
  switch (action.type) {
    case URL_CHANGE.toString():
      return {
        ...state,
        url: action.payload.url
      }
    default:
      return state;
  }
}