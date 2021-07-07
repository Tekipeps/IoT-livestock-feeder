import { AnyAction as Action } from "redux";
import { Type } from "./actions";

export interface DrinkerState {
  distance: string;
}

const initialState: DrinkerState = {
  distance: "",
};

const feederReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case Type.DRINKER_GET_DISTANCE:
      return { ...state, distance: action.payload };
    default:
      return state;
  }
};

export default feederReducer;
