import styles from "../../styles/CurriculoBody.module.css";
import PessoalCampos from "./campos/Pessoal";
import EnderecoCampos from "./campos/Endereco";

import { useSelector } from "react-redux";

export default (props) => {
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);

  return (
    <div className={styles.divConteudo}>
      <div className={styles.divTitle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={styles.chevron}
          onClick={(e) => console.log(currentUser)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
        <p>Currículo</p>
      </div>
      <div className={styles.divCurriculo}>
        <PessoalCampos currentUser={currentUser} />
        <EnderecoCampos currentUser={currentUser} />
      </div>
    </div>
  );
};
