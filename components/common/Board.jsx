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
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { updateCurriculum } from "../../redux/curriculum/actions";
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
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
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

      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          onClick={() => {
            dispatch(
              updateCurriculum(fieldName, itemsField, [
                data,
                ...valueFrom(currentCurriculum, fieldName, itemsField),
              ]),
            );
          }}
        >
          Adicionar
        </Button>
      </Stack>

      <TableContainer component={Paper}>
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
      </TableContainer>
    </>
  );
};

export { BoardComponent as Board };
