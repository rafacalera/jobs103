import { useDispatch, useSelector } from "react-redux";
import { makeFieldComponent } from "./util";
import {
  Button,
  Card,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  tableCellClasses,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import { Delete, DeleteOutline, Height } from "@mui/icons-material/";
import { styled } from "@mui/material/styles";
import {
  updateCurriculum,
  deleteFromCurriculum,
} from "../../redux/curriculum/actions";
import { useState } from "react";

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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: "#333",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#D3D3D3",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const BoardComponent = ({ fieldSection, fieldName }) => {
  const dispatch = useDispatch();
  const { fields } = fieldSection;
  const [data, setData] = useState();
  const { currentCurriculum } = useSelector(
    (rootReducer) => rootReducer.curriculumReducer,
  );

  return (
    <>
      <List sx={{ width: "100%", bgcolor: "commom.white" }}>
        {valueFrom(currentCurriculum, fieldName, itemsField).map((row) => (
          <ListItem
            key={row.name}
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
            {fields.map((f) => (
              <ListItemText primary={row[f.id]} />
            ))}
            {/* <ListItemText primary={row.curso} /> */}
          </ListItem>
        ))}
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

            return makeFieldComponent(field, value, action);
          })}
        </div>

        <Button
          variant="contained"
          sx={{
            minWidth: "200px",
            maxWidth: "300px",
          }}
          onClick={() => {
            dispatch(
              updateCurriculum(fieldName, itemsField, [
                data,
                ...valueFrom(currentCurriculum, fieldName, itemsField),
              ]),
            );
            setData("");
          }}
        >
          Adicionar
        </Button>
      </div>

      {/* <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {fields.map((f) => (
                <StyledTableCell>{f.label}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {valueFrom(currentCurriculum, fieldName, itemsField).map((row) => (
              <StyledTableRow key={row.name}>
                {fields.map((f) => (
                  <StyledTableCell>{row[f.id]}</StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
    </>
  );
};

export { BoardComponent as Board };
