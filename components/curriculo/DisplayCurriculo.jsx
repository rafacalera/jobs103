import styles from "../../styles/CurriculoBody.module.css";
import Campos from "./Campos";
import { ChevronDown } from "../Icone";
import { useState } from "react";

export default () => {
  const [exibirCurriculo, setExibirCurriculo] = useState(true);

  return (
    <div className={styles.divConteudo}>
      <div
        className={styles.divTitle}
        style={exibirCurriculo ? {} : { borderRadius: "25px" }}
        onClick={(_) => setExibirCurriculo(!exibirCurriculo)}
      >
        {ChevronDown}
        <p>Currículo</p>
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
