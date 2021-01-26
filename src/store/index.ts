import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import drinkerReducer, { DrinkerState } from "./drinkerState/reducer";
import feederReducer, { FeederState } from "./feederState/reducer";
import ledReducer from "./ledState/reducer";

export interface RootState {
  led: boolean;
  feeder: FeederState;
  drinker: DrinkerState;
}
const middleWares =
  process.env.NODE_ENV != "production"
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk);

const store = createStore(
  combineReducers({
    led: ledReducer,
    feeder: feederReducer,
    drinker: drinkerReducer,
  }),
  middleWares
);

export default store;
