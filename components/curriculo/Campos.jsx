import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Layout from "./Layout";
import Fields from "../../helpers/fields";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
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
              {section.fields.map((field) => {
                if (field.values) {
                  return (
                    <FormControl
                      key={`formControl${field.id}`}
                      variant="standard"
                      sx={{ minWidth: 200 }}
                    >
                      <InputLabel id={field.labelId}>{field.label}</InputLabel>
                      <Select
                        labelId={field.labelId}
                        id={field.id}
                        label={field.label}
                        value={currentCurriculum.basicInfos[field.id]}
                        defaultValue={currentCurriculum.basicInfos[field.id]}
                        onChange={(e) => {
                          dispatch(
                            updateCurriculum(
                              field.redux,
                              field.id,
                              e.target.value,
                            ),
                          );
                        }}
                      >
                        {field.values.map((option) => (
                          <MenuItem
                            key={`item${option.value}`}
                            value={option.value}
                          >
                            {option.placeholder}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  );
                } else {
                  return (
                    <TextField
                      key={`textField${field.id}`}
                      id={field.id}
                      label={field.label}
                      type={field.type}
                      variant="standard"
                      sx={
                        field.id === "complemento"
                          ? { minWidth: 300 }
                          : { minWidth: 200 }
                      }
                      value={
                        field.id === "primeiroNome"
                          ? currentCurriculum.basicInfos.nome.split(" ")[0]
                          : field.id === "sobrenome"
                          ? currentCurriculum.basicInfos.nome
                              .split(" ")
                              .slice(1)
                              .join(" ")
                          : currentCurriculum.basicInfos[field.id]
                      }
                      onChange={(e) => {
                        dispatch(
                          updateCurriculum(
                            field.redux,
                            field.id,
                            e.target.value,
                          ),
                        );
                      }}
                    />
                  );
                }
              })}
            </Layout>
          ))
        : null}
    </>
  );
};
