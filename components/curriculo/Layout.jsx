import Typography from "@mui/material/Typography";
import styles from "../../styles/LayoutCurriculo.module.css";
import { useState } from "react";

export default (props) => {
  const [exibirConteudo, setExibirConteudo] = useState(true);

  return (
    <div className={styles.conteudo}>
      <Typography
        component="h1"
        variant="h5"
        style={{ cursor: "pointer" }}
        onClick={(_) => setExibirConteudo(!exibirConteudo)}
      >
        {props.titulo}
      </Typography>
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
