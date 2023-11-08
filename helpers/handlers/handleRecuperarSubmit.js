import axios from "axios";

export const handleRecuperarSubmit = async (
  e,
  { value, error },
  setEmail,
  setIsDisabled,
) => {
  e.preventDefault();
  setIsDisabled(true);

  setEmail((prev) => ({
    ...prev,
    error: "",
  }));
  if (value?.trim()?.length === 0) {
    setEmail((prev) => ({
      ...prev,
      error: "Preencha o campo de email",
    }));
    setIsDisabled(false);
    return;
  }
  axios
    .post("/api/user/recuperar-senha", { email: value })
    .then((res) => {
      alert(res.data);
      setIsDisabled(false);
    })
    .catch((err) => {
      const mensagem = err.response.data;
      if (mensagem === "Usuário não encontrado") {
        setEmail((prev) => ({
          ...prev,
          error: `${mensagem}`,
        }));
        setIsDisabled(false);
        return;
      }
      if (
        mensagem ==
        "Ocorreu um erro ao enviar o email, tente novamente mais tarde"
      ) {
        alert(`${mensagem}`);
        setIsDisabled(false);

        return;
      }
    });
};
