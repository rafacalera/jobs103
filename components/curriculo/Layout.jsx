import Typography from "@mui/material/Typography";
import styles from "../../styles/LayoutCurriculo.module.css";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "../Icone";

export default (props) => {
  const [exibirConteudo, setExibirConteudo] = useState(true);

  return (
    <div className={styles.conteudo} key={props.titulo}>
      <div
        className={styles.conteudoTitle}
        onClick={() => setExibirConteudo(!exibirConteudo)}
      >
        {exibirConteudo ? ChevronDown : ChevronUp}
        <Typography component="h1" variant="h5" style={{ cursor: "pointer" }}>
          {props.titulo}
        </Typography>
      </div>
      <div
        className={
          exibirConteudo
            ? styles.conteudoChildren
            : `${styles.conteudoChildren} ${styles.noneDisplay}`
        }
      >
        {props.children}
      </div>
    </div>
  );
};
