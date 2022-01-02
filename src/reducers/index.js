// Combine Multiple reducers

import { combineReducers } from "redux";

import jobReducer from "./jobs";
// import auth from "./auth";

export const reducers = combineReducers({
  jobReducer,
});
