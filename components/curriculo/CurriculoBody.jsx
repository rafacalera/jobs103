import styles from "../../styles/CurriculoBody.module.css";
import PessoalCampos from "./campos/Pessoal";
import EnderecoCampos from "./campos/Endereco";
import { ChevronDown } from "../Icone";
import { useSelector } from "react-redux";
import { useState } from "react";

export default (props) => {
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
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
        <PessoalCampos currentUser={currentUser} />
        <EnderecoCampos currentUser={currentUser} />
      </div>
    </div>
  );
};
