import { TextField } from "../common/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Select } from "../common/Select";
import Layout from "./Layout";
import Fields from "../../helpers/fields";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateCurriculum } from "../../redux/curriculum/actions";

const makeFieldComponent = (field, curriculum) => {
  const key = `field${field.redux}${field.id}`;

  if (field.values) {
    return (
      <Select
        key={key}
        field={field}
        curriculum={curriculum}
        onChange={(e) => {
          dispatch(updateCurriculum(field.redux, field.id, e.target.value));
        }}
      />
    );
  }

  return (
    <TextField
      key={key}
      field={field}
      curriculum={curriculum}
      onChange={() => {
        dispatch(updateCurriculum(field.redux, field.id, e.target.value));
      }}
    />
  );
};

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
              {section.fields.map((field) =>
                makeFieldComponent(field, currentCurriculum),
              )}
            </Layout>
          ))
        : null}
    </>
  );
};
