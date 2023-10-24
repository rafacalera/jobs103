import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Layout from "./Layout";
import Fields from "../../helpers/fields";

export default ({ setarCampos, campos }) => {
  return (
    <>
      {Fields.map((section) => (
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
                    value={campos[field.id]}
                    defaultValue={campos[field.id]}
                    onChange={(e) => setarCampos(field.id, e.target.value)}
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
                  value={campos[field.id]}
                  onChange={(e) => setarCampos(e.target.id, e.target.value)}
                />
              );
            }
          })}
        </Layout>
      ))}
    </>
  );
};
