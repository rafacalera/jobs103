import Typography from "@mui/material/Typography";
import styles from "../../styles/LayoutCurriculo.module.css";

export default (props) => {
  return (
    <div className={styles.conteudo}>
      <Typography component="h1" variant="h5">
        {props.titulo}
      </Typography>
      <div className={styles.conteudoChildren}>{props.children}</div>
    </div>
  );
};
