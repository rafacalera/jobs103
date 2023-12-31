import { TextField, textFieldValue } from "../common/TextField";
import { Select } from "../common/Select";
import { DateField } from "./DateField";

const makeFieldComponentFromCurriculum = (field, curriculum, action) =>
  makeFieldComponent(
    field,
    field.values
      ? curriculum[field.redux][field.id]
      : textFieldValue(curriculum, field),
    action,
  );

const makeFieldComponent = (field, value, action, error) => {
  if (field.values) {
    return (
      <Select
        key={`formControl${field.id}`}
        field={field}
        value={value}
        defaultValue={value}
        onChange={action}
        error={error}
      />
    );
  }
  if (field.type === "date") {
    return (
      <DateField
        key={`date${field.id}`}
        field={field}
        value={value}
        onChange={action}
        error={error}
      />
    );
  }

  return (
    <TextField
      key={`textField${field.id}`}
      field={field}
      value={value}
      onChange={action}
      error={error}
    />
  );
};

export { makeFieldComponentFromCurriculum, makeFieldComponent };
