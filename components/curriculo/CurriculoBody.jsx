import styles from "../../styles/CurriculoBody.module.css";
import Pessoal from "./campos/Pessoal";
import Endereco from "./campos/Endereco";
import { ChevronDown } from "../Icone";
import { useState } from "react";

export default ({ setarCampos, campos }) => {
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
        <Pessoal setarCampos={setarCampos} campos={campos} />
        <Endereco setarCampos={setarCampos} campos={campos} />
      </div>
    </div>
  );
};
