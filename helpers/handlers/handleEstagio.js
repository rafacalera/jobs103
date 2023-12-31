function handleEstagio(event, setPessoalError, pessoal, setSubmitStage) {
  setPessoalError((prev) => ({
    ...prev,
    primeiroNomeError: "",
  }));
  setPessoalError((prev) => ({
    ...prev,
    ultimoNomeError: "",
  }));
  setPessoalError((prev) => ({
    ...prev,
    nascimentoError: "",
  }));
  setPessoalError((prev) => ({
    ...prev,
    generoError: "",
  }));
  setPessoalError((prev) => ({
    ...prev,
    emailError: "",
  }));
  setPessoalError((prev) => ({
    ...prev,
    senhaError: "",
  }));

  if (pessoal.primeiroNome.trim().length < 3) {
    setPessoalError((prev) => ({
      ...prev,
      primeiroNomeError: "É preciso um Nome válido para continuar",
    }));
    return false;
  }

  if (pessoal.primeiroNome.length > 100) {
    setPessoalError((prev) => ({
      ...prev,
      primeiroNomeError: "Nome passa o limite máximo de caracteres",
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

  if (pessoal.ultimoNome.length > 100) {
    setPessoalError((prev) => ({
      ...prev,
      ultimoNomeError: "Sobrenome passa o limite máximo de caracteres",
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

  if (pessoal.email.trim().length < 4) {
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

  if (pessoal.email.length > 200) {
    setPessoalError((prev) => ({
      ...prev,
      emailError: "E-mail passa o limite máximo de caracteres",
    }));
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

  if (pessoal.senha.length > 255) {
    setPessoalError((prev) => ({
      ...prev,
      senhaError: "Senha ultrapassa limite máximo de caracteres",
    }));
    return false;
  }

  setSubmitStage(true);
  localStorage.setItem("nascimento", pessoal.nascimento.$d);
  return true;
}

export default handleEstagio;
