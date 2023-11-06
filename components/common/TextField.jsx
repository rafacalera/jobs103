import { TextField } from "@mui/material";
import useWindowDimensions from "./useWindowDimensions";

const textFieldValue = (curriculum, field) => {
  const redux = curriculum[field.redux];

  if (field.id === "primeiroNome") {
    return redux?.nome.split(" ")[0] || "";
  }

  if (field.id === "sobrenome") {
    return redux?.nome?.split(" ").slice(1).join(" ") || "";
  }

  if (redux) {
    return redux[field.id] || "";
  }

  return "";
};

const TextFieldComponent = ({ key, field, value, onChange, error }) => {
  const { width } = useWindowDimensions();
  return (
    <TextField
      required={field.required}
      error={error?.[field.redux]?.[field.id]?.length > 0 ? true : false}
      key={key}
      id={field.id}
      label={field.label}
      type={field.type}
      variant="standard"
      sx={width < 465 ? { width: "150px" } : { width: "200px" }}
      value={value}
      onChange={onChange}
      helperText={error?.[field.redux]?.[field.id] ?? ""}
      disabled={field.disabled}
    />
  );
};

export { TextFieldComponent as TextField, textFieldValue };
