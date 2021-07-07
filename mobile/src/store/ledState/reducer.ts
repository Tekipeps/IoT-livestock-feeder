import { AnyAction as Action } from "redux";
import { Type } from "./actions";

const initialState: boolean = false;

const ledReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case Type.LED_ON:
      return true;
    case Type.LED_OFF:
      return false;
    case Type.LED_TOGGLE:
      return action.value;
    default:
      return state;
  }
};
export default ledReducer;
