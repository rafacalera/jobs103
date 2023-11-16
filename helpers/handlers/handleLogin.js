import axios from "axios";

import { loginUser } from "../../redux/user/actions";
import { resetCurriculum } from "../../redux/curriculum/actions";

function handleLogin(
  event,
  login,
  setLoginError,
  router,
  dispatch,
  setIsDisabled,
  currentCurriculum,
) {
  event.preventDefault();
  setIsDisabled(true);
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
    return setIsDisabled(false);
  }
  if (login.senha.trim().length === 0) {
    setLoginError((prev) => ({
      ...prev,
      senha: "Preencha sua Senha para prosseguir",
    }));
    return setIsDisabled(false);
  }

  const data = new FormData(event.currentTarget);
  axios
    .post("/api/user/login", {
      email: data.get("email"),
      senha: data.get("password"),
    })
    .then((response) => {
      if (currentCurriculum?.basicInfos.email !== login.email) {
        dispatch(resetCurriculum());
      }
      dispatch(loginUser(response.data));
      router.push("/curriculo");
    })
    .catch((err) => {
      console.log(err);
      if (err.response.data.error === "email") alert("E-mail não confere");
      else if (err.response.data.error === "senha") alert("Senha não confere");
      setIsDisabled(false);
    });
}

export default handleLogin;
