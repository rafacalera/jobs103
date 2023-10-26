import Layout from "./Layout";
import Fields from "../../helpers/fields";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { makeFieldComponentFromCurriculum } from "../common/util";
import { Board } from "../common/Board";
import { updateCurriculum } from "../../redux/curriculum/actions";

export default () => {
  const dispatch = useDispatch();
  const { currentCurriculum } = useSelector(
    (rootReducer) => rootReducer.curriculumReducer,
  );

  return (
    <>
      {currentCurriculum && currentCurriculum.basicInfos
        ? Fields.map((section) => (
            <Layout titulo={section.section}>
              {(section.type || "none") == "list" ? (
                <Board
                  curriculum={currentCurriculum}
                  fieldSection={section}
                  fieldName={section.name}
                />
              ) : (
                section.fields.map((field) =>
                  makeFieldComponentFromCurriculum(
                    field,
                    currentCurriculum,
                    (e) =>
                      dispatch(
                        updateCurriculum(field.redux, field.id, e.target.value),
                      ),
                  ),
                )
              )}
            </Layout>
          ))
        : null}
    </>
  );
};
