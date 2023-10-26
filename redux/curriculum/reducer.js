import CurriculumActionTypes from "./action-types";
import { defineState } from "redux-localstore";

const defaultState = {
  currentCurriculum: null,
};

const initialState = defineState(defaultState)("curriculumReducer");

const curriculumReducer = (state = initialState, action) => {
  switch (action.type) {
    case CurriculumActionTypes.ADD:
      return { ...state, currentCurriculum: action.payload };
    case CurriculumActionTypes.RESET:
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
    case CurriculumActionTypes.DELETE_FROM_ARRAY:
      const { sessao, valor } = action.payload;
      const newArray = state.currentCurriculum[sessao].items.filter(
        (value) => value !== valor,
      );

      return {
        ...state,
        currentCurriculum: {
          ...state.currentCurriculum,
          [sessao]: {
            ...state.currentCurriculum[sessao],
            items: newArray,
          },
        },
      };
    default:
      return state;
  }
};

export default curriculumReducer;
