import { URL_CHANGE } from "../actions";

// http://localhost:5173/?layers=[{%20%22name%22:%20%22example_name%22,%20%22s3_url%22:%20%22https://nrs.objectstore.gov.bc.ca/uphjps/riso.pmtiles%22,%20%22shape_paint_rules_list_id%22:%201,%20%22label_property%22:%20%22code_name%22%20}]

interface Layer {
    name: string
    s3_url: string
    shape_pain_rules_list_id: number 
    label_property: string
}

const initialState: { url: string } = {
  url: ''
};

export default function layerAndURLStateReducer(state = initialState, action: any) {
  switch (action.type) {
    case URL_CHANGE.toString():
      return {
        ...state,
        url: action.payload.url,
        layers: JSON.parse(action.payload.layers) as Layer[]
      }
    default:
      return state;
  }
}