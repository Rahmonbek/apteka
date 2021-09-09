import { combineReducers } from "redux";
import { infoReducer } from "./infoReduce";

export const rootReducers = combineReducers({
  lang: infoReducer,
});
