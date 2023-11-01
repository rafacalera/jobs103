import { useDispatch, useSelector } from "react-redux";
import { makeFieldComponent } from "./util";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import { DeleteOutline } from "@mui/icons-material/";

import {
  updateCurriculum,
  deleteFromCurriculum,
} from "../../redux/curriculum/actions";
import { useState } from "react";
import useWindowDimensions from "./useWindowDimensions";
import { onAdd } from "../../helpers/handlers/handleAdd";

const itemsField = "items";

const valueFrom = (curriculum, section, field) => {
  const sectionValue = curriculum[section];

  if (sectionValue) {
    const fieldValue = sectionValue[field];

    if (fieldValue) {
      return fieldValue;
    }
  }

  return [];
};

const handleSizeChanges = (width, row, fields) => {
  const newFields = fields.filter(
    (f) =>
      // f.id !== "dataInicio" &&
      f.id !== "dataFim" &&
      f.id !== "grauFormacao" &&
      f.id !== "tipo" &&
      f.id !== "nivel" &&
      f.id !== "descricao" &&
      f.id !== "totalHoras",
  );

  if (width < 900 && row.instituicao) {
    return (
      <>
        <ListItemText primary={row.instituicao} />
        <ListItemText primary={row.curso} />
      </>
    );
  }

  if (width < 900 && row.instituicao) {
    return (
      <>
        <ListItemText primary={row.instituicao} />
        <ListItemText primary={row.curso} />
      </>
    );
  }

  if (width < 900 && row.empresa) {
    return (
      <>
        <ListItemText primary={row.empresa} />
        <ListItemText primary={row.cargo} />
      </>
    );
  }
  return newFields.map((f) => <ListItemText primary={row[f.id]} />);
};

const BoardComponent = ({ fieldSection, fieldName }) => {
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();
  const { fields } = fieldSection;
  const [data, setData] = useState();
  const [error, setError] = useState({});
  const { currentCurriculum } = useSelector(
    (rootReducer) => rootReducer.curriculumReducer,
  );

  return (
    <>
      <List sx={{ width: "100%", bgcolor: "commom.white" }}>
        {valueFrom(currentCurriculum, fieldName, itemsField).map(
          (row, index) => (
            <ListItem
              key={`${row.name}${index}}`}
              secondaryAction={
                <IconButton
                  aria-label="comment"
                  onClick={() => {
                    dispatch(deleteFromCurriculum(fieldName, row));
                  }}
                >
                  <DeleteOutline />
                </IconButton>
              }
            >
              {handleSizeChanges(width, row, fields)}
            </ListItem>
          ),
        )}
      </List>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {(fields || []).map((field) => {
            const action = (e) => {
              const fieldId = field.id;

              const obj = {
                ...data,
              };

              obj[fieldId] = e.target.value;

              setData(obj);
            };

            const value = (data || {})[field.id] || "";

            return makeFieldComponent(field, value, action, error);
          })}
        </div>

        <Button
          variant="contained"
          sx={{
            minWidth: "200px",
            maxWidth: "300px",
          }}
          disabled={!data}
          onClick={(e) => {
            onAdd(
              fieldName,
              setData,
              data,
              setError,
              dispatch,
              updateCurriculum,
              itemsField,
              valueFrom,
              currentCurriculum,
            );
            console.log(error);
          }}
        >
          Adicionar
        </Button>
      </div>
    </>
  );
};

export { BoardComponent as Board };
