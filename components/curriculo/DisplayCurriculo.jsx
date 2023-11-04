import styles from "../../styles/DisplayCurriculo.module.css";
import Campos from "./Campos";
import { ChevronDown, ChevronUp } from "../Icone";
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { postDownload } from "../../helpers/handlers/handleDownloadClick";
import { useDispatch, useSelector } from "react-redux";
import { handleCurriculumSave } from "../../helpers/handlers/handleCurriculumSave";
import { logoutUser } from "../../redux/user/actions";
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [exibirCurriculo, setExibirCurriculo] = useState(true);
  const [button, setButton] = useState(true);
  const { currentCurriculum } = useSelector(
    (rootReducer) => rootReducer.curriculumReducer,
  );
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  return (
    <div className={styles.divConteudo}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "24px",
          padding: "0 50px",
        }}
      >
        <div
          className={styles.divTitle}
          onClick={() => setExibirCurriculo(!exibirCurriculo)}
        >
          {exibirCurriculo ? ChevronDown : ChevronUp}
          <Typography
            component="h1"
            variant="h5"
            sx={{ fontWeight: "800", cursor: "pointer" }}
          >
            Currículo
          </Typography>
        </div>
        <Button
          variant="contained"
          disabled={!button}
          sx={{
            width: "150px",
            display: "flex",
            justifyContent: "space-around",
            marginRight: "50px",
          }}
          onClick={() => {
            setButton(false);
            handleCurriculumSave(
              currentCurriculum,
              currentUser,
              dispatch,
              logoutUser,
              router,
            );
            setTimeout(() => {
              setButton(true);
            }, 5000);
          }}
        >
          Salvar
        </Button>
        <Button
          variant="contained"
          disabled={!button}
          sx={{
            width: "150px",
            display: "flex",
            justifyContent: "space-around",
            marginRight: "50px",
          }}
          onClick={async () => {
            setButton(false);
            await postDownload(
              currentCurriculum,
              currentUser,
              dispatch,
              logoutUser,
              router,
            );
            setTimeout(() => {
              setButton(true);
            }, 5000);
          }}
        >
          Download
          <SaveAltIcon />
        </Button>
      </div>
      <div
        className={styles.divCurriculo}
        style={!exibirCurriculo ? { display: "none", height: "0px" } : {}}
      >
        <Campos />
      </div>
    </div>
  );
};
