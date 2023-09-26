import { useState } from "react";
import Pessoal from "./Pessoal";
import dayjs from "dayjs";

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

  const pessoalController = {
    pessoalValues: {
      pessoal: pessoal,
      setPessoal: setPessoal,
    },
    pessoalErrors: {
      pessoalError: pessoalError,
      setPessoalError: setPessoalError,
    },
  };

  const nextStage = (event) => {
    setPessoalError((prev) => ({
      ...prev,
      primeiroNomeError: event.target.value,
    }));
    setPessoalError((prev) => ({
      ...prev,
      ultimoNomeError: event.target.value,
    }));
    setPessoalError((prev) => ({
      ...prev,
      nascimentoError: event.target.value,
    }));
    setPessoalError((prev) => ({
      ...prev,
      generoError: event.target.value,
    }));
    setPessoalError((prev) => ({
      ...prev,
      emailError: event.target.value,
    }));
    setPessoalError((prev) => ({
      ...prev,
      senhaError: event.target.value,
    }));

    if (pessoal.primeiroNome.trim().length < 3) {
      setPessoalError((prev) => ({
        ...prev,
        primeiroNomeError: "É preciso um Nome válido para continuar",
      }));
      return false;
    }

    if (pessoal.ultimoNome.trim().length < 3) {
      setPessoalError((prev) => ({
        ...prev,
        ultimoNomeError: "É preciso um Sobrenome válido para continuar",
      }));
      return false;
    }

    if (
      pessoal.nascimento === null ||
      isNaN(pessoal.nascimento.$D) ||
      isNaN(pessoal.nascimento.$M) ||
      isNaN(pessoal.nascimento.$y)
    ) {
      setPessoalError((prev) => ({
        ...prev,
        nascimentoError: "É preciso uma Data válida para continuar",
      }));
      return false;
    }

    if (pessoal.genero === "") {
      setPessoalError((prev) => ({
        ...prev,
        generoError: "Selecionar Gênero",
      }));
      return false;
    }

    if (pessoal.email.trim().length < 6) {
      switch (pessoal.email.length) {
        case 0:
          setPessoalError((prev) => ({
            ...prev,
            emailError: "É preciso um E-mail para continuar",
          }));
          break;
        default:
          setPessoalError((prev) => ({
            ...prev,
            emailError: "É preciso um endereço E-mail válido",
          }));
      }
      return false;
    }

    if (pessoal.senha.length < 6) {
      switch (pessoal.senha.length) {
        case 0:
          setPessoalError((prev) => ({
            ...prev,
            senhaError: "É preciso uma Senha para continuar",
          }));
          break;
        default:
          setPessoalError((prev) => ({
            ...prev,
            senhaError: "É preciso uma Senha mais forte",
          }));
      }
      return false;
    }

    props.submitController.setSubmitStage(true);
    localStorage.setItem("nascimento", pessoal.nascimento.$d);
    return true;
  };

  return (
    <Pessoal
      submitController={props.submitController}
      pessoalController={pessoalController}
      nextStage={nextStage}
    />
  );
};
