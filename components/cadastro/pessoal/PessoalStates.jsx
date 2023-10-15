import { useState } from "react";
import dayjs from "dayjs";
import PessoalForm from "./PessoalForm";

export default (props) => {
  const now = new Date(Date.now());
  const [pessoal, setPessoal] = useState({
    primeiroNome: "",
    ultimoNome: "",
    nascimento: dayjs(
      `${now.getFullYear() - 18}-${now.getMonth() + 1}-${now.getDate()}`,
    ),
    genero: "",
    email: "",
    senha: "",
  });

  const [pessoalError, setPessoalError] = useState({
    primeiroNomeError: "",
    ultimoNomeError: "",
    nascimentoError: "",
    generoError: "",
    emailError: "",
    senhaError: "",
  });

  return (
    <PessoalForm
      {...props}
      setPessoal={setPessoal}
      pessoal={pessoal}
      setPessoalError={setPessoalError}
      pessoalError={pessoalError}
    />
  );
};
