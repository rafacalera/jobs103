import styles from "../../styles/DisplayCurriculo.module.css";
import Campos from "./Campos";
import { ChevronDown, ChevronUp } from "../Icone";
import { useState } from "react";
import { Typography } from "@mui/material";

export default () => {
  const [exibirCurriculo, setExibirCurriculo] = useState(true);

  return (
    <div className={styles.divConteudo}>
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
      <div
        className={styles.divCurriculo}
        style={!exibirCurriculo ? { display: "none", height: "0px" } : {}}
      >
        <Campos />
      </div>
    </div>
  );
};
