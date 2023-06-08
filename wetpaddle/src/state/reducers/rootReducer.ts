import { combineReducers } from "redux";
import layerAndURLStateReducer from "./layerAndStateReducer";

export const rootReducer = combineReducers({layerAndURLStateReducer})