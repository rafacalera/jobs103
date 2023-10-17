function handleSubmit(event, login, setLoginError) {
  event.preventDefault();

  setLoginError((prev) => ({
    ...prev,
    email: "",
    senha: "",
  }));

  if (login.email.trim().length === 0) {
    setLoginError((prev) => ({
      ...prev,
      email: "Preencha seu E-mail para prosseguir",
    }));
    return;
  }
  if (login.senha.trim().length === 0) {
    setLoginError((prev) => ({
      ...prev,
      senha: "Preencha sua Senha para prosseguir",
    }));
    return;
  }

  const data = new FormData(event.currentTarget);
  console.log({
    email: data.get("email"),
    password: data.get("password"),
  });
}

export default handleSubmit;
