import CurriculumActionTypes from "./action-types";
import { defineState } from "redux-localstore";

const defaultState = {
  currentCurriculum: [],
};

const initialState = defineState(defaultState)("curriculumReducer");

const curriculumReducer = (state = initialState, action) => {
  switch (action.type) {
    case CurriculumActionTypes.ADD:
      return { ...state, currentCurriculum: action.payload };
    case CurriculumActionTypes.LOGOUT:
      return { ...state, currentCurriculum: null };
    case CurriculumActionTypes.UPDATE_VALUE:
      const { section, field, value } = action.payload;
      return {
        ...state,
        currentCurriculum: {
          ...state.currentCurriculum,
          [section]: {
            ...state.currentCurriculum[section],
            [field]: value,
          },
        },
      };
    default:
      return state;
  }
};

export default curriculumReducer;
