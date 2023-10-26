import { TextField, textFieldValue } from "../common/TextField";
import { Select } from "../common/Select";

const makeFieldComponentFromCurriculum = (field, curriculum, action) =>
  makeFieldComponent(
    field,
    field.values
      ? curriculum[field.redux][field.id]
      : textFieldValue(curriculum, field),
    action,
  );

const makeFieldComponent = (field, value, action) => {
  if (field.values) {
    return (
      <Select
        key={`formControl${field.id}`}
        field={field}
        value={value}
        defaultValue={value}
        onChange={action}
      />
    );
  }

  return (
    <TextField
      key={`textField${field.id}`}
      field={field}
      value={value}
      onChange={action}
    />
  );
};

export { makeFieldComponentFromCurriculum, makeFieldComponent };
