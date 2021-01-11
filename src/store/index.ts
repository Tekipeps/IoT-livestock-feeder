import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import feederReducer, { FeederState } from "./feederState/reducer";
import ledReducer from "./ledState/reducer";

export interface RootState {
  led: boolean;
  feeder: FeederState;
}
const middleWares =
  process.env.NODE_ENV != "production"
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk);

const store = createStore(
  combineReducers({ led: ledReducer, feeder: feederReducer }),
  middleWares
);

export default store;
