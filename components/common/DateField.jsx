import { DateField } from "@mui/x-date-pickers";
import { useState } from "react";

const DateFieldComponent = ({ key, field, value, onChange, error }) => {
  return (
    <DateField
      error={error?.[field.redux]?.[field.id]?.length > 0 ? true : false}
      key={key}
      label={field.label}
      value={value || null}
      required={field.required}
      variant="standard"
      format={"YYYY-MM"}
      onBlur={onChange}
      helperText={error?.[field.redux]?.[field.id] ?? ""}
    />
  );
};

export { DateFieldComponent as DateField };
