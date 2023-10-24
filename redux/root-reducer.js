import { combineReducers } from "redux";
import userReducer from "./user/reducer";
import curriculumReducer from "./curriculum/reducer";

const rootReducer = combineReducers({ userReducer, curriculumReducer });

export default rootReducer;
