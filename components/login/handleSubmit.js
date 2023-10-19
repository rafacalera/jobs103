import axios from "axios";

import { loginUser } from "../../redux/user/actions";

function handleSubmit(event, login, setLoginError, router, dispatch) {
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
  axios
    .post("/api/user/login", {
      email: data.get("email"),
      senha: data.get("password"),
    })
    .then((response) => {
      dispatch(loginUser(response.data));
      router.push("/curriculo");
    })
    .catch((error) => {
      alert("Aluno não encontrado");
      console.error(error);
    });
}

export default handleSubmit;
