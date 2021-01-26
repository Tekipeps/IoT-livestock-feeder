import { AnyAction as Action } from "redux";
import { Type } from "./actions";

export interface FeederState {
  distance: string;
}

const initialState: FeederState = {
  distance: "",
};

const feederReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case Type.FEEDER_GET_DISTANCE:
      return { ...state, distance: action.payload };
    default:
      return state;
  }
};

export default feederReducer;
