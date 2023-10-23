import UserActionTypes from "./action-types";
import { defineState } from "redux-localstore";

const defaultState = {
  currentUser: null,
};

const initialState = defineState(defaultState)("userReducer");

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.LOGIN:
      return { ...state, currentUser: action.payload };
    case UserActionTypes.LOGOUT:
      return { ...state, currentUser: null };
    default:
      return state;
  }
};

export default userReducer;
