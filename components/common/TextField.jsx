import { TextField } from "@mui/material";

const textFieldValue = (curriculum, field) => {
  const redux = curriculum[field.redux];

  if (field.id === "primeiroNome") {
    return redux?.nome.split(" ")[0] || "";
  }

  if (field.id === "sobrenome") {
    redux?.nome?.split(" ").slice(1).join(" ") || "";
  }

  if (redux) {
    return redux[field.id] || "";
  }

  return "";
};

const TextFieldComponent = ({ key, field, curriculum, onChange }) => (
  <TextField
    key={key}
    id={field.id}
    label={field.label}
    type={field.type}
    variant="standard"
    sx={field.id === "complemento" ? { minWidth: 300 } : { minWidth: 200 }}
    value={textFieldValue(curriculum, field)}
    onChange={onChange}
  />
);

export { TextFieldComponent as TextField };
