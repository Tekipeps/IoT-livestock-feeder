import { AnyAction as Action } from "redux";
import { Type } from "./actions";

export interface FeederState {
  distance: string;
  feederStatus: string;
}

const initialState: FeederState = {
  distance: "",
  feederStatus: ""
};

const feederReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case Type.FEEDER_GET_DISTANCE:
      return { ...state, distance: action.payload };
    case Type.FEEDER_RELEASE_FEED:
      return { ...state, feederStatus: action.payload }
    default:
      return state;
  }
};

export default feederReducer;
