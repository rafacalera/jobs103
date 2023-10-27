import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const SelectComponent = ({ field, value, defaultValue, key, onChange }) => (
  <FormControl key={key} variant="standard" sx={{ width: 200 }}>
    <InputLabel id={field.labelId}>{field.label}</InputLabel>
    <Select
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
  </FormControl>
);

export { SelectComponent as Select };
