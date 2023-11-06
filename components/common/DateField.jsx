import { DateField } from "@mui/x-date-pickers";
import useWindowDimensions from "./useWindowDimensions";

const DateFieldComponent = ({ key, field, value, onChange, error }) => {
  const { width } = useWindowDimensions();
  return (
    <DateField
      error={error?.[field.redux]?.[field.id]?.length > 0 ? true : false}
      key={key}
      sx={width < 465 ? { width: "150px" } : { width: "200px" }}
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
