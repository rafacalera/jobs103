import CurriculumActionTypes from "./action-types";

export const addCurriculum = (payload) => ({
  type: CurriculumActionTypes.ADD,
  payload,
});

export const updateCurriculum = (section, field, value) => ({
  type: CurriculumActionTypes.UPDATE_VALUE,
  payload: { section, field, value },
});
export const deleteFromCurriculum = (sessao, valor) => ({
  type: CurriculumActionTypes.DELETE_FROM_ARRAY,
  payload: { sessao, valor },
});

export const resetCurriculum = () => ({
  type: CurriculumActionTypes.RESET,
});
