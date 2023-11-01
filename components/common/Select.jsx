import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const SelectComponent = ({
  field,
  value,
  defaultValue,
  key,
  onChange,
  error,
}) => (
  <FormControl key={key} variant="standard" sx={{ width: 200 }}>
    <InputLabel id={field.labelId} required={field.required}>
      {field.label}
    </InputLabel>
    <Select
      error={error?.[field.redux]?.[field.id]?.length > 0 ? true : false}
      labelId={field.labelId}
      id={field.id}
      label={field.label}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
    >
      {field.values.map((option) => (
        <MenuItem key={`item${option.value}`} value={option.value}>
          {option.placeholder}
        </MenuItem>
      ))}
    </Select>
    <FormHelperText sx={{ color: "red" }}>
      {error?.[field.redux]?.[field.id] ?? ""}
    </FormHelperText>
  </FormControl>
);

export { SelectComponent as Select };
