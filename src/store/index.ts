import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import ledReducer from "./ledState/reducer";

export interface RootState {
  led: boolean;
}
const middleWares =
  process.env.NODE_ENV != "production"
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk);

const store = createStore(combineReducers({ led: ledReducer }), middleWares);

export default store;
