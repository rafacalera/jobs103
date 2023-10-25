import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const SelectComponent = ({ field, curriculum, key, onChange }) => (
  <FormControl key={key} variant="standard" sx={{ minWidth: 200 }}>
    <InputLabel id={field.labelId}>{field.label}</InputLabel>
    <Select
      labelId={field.labelId}
      id={field.id}
      label={field.label}
      value={curriculum[field.redux][field.id]}
      defaultValue={curriculum[field.redux][field.id]}
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
