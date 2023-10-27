import { DateField } from "@mui/x-date-pickers";
import { useState } from "react";

const DateFieldComponent = ({ key, field, value, onChange }) => {
  const [helperText, setHelperText] = useState("Ano e Mês");

  return (
    <DateField
      key={key}
      label={field.label}
      value={value || null}
      variant="standard"
      format={"YYYY-MM"}
      onBlur={onChange}
      onClick={() => setHelperText("")}
      helperText={helperText}
    />
  );
};

export { DateFieldComponent as DateField };
