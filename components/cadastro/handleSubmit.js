import axios from "axios";
import { loginUser } from "../../redux/user/actions";
import handleEndereco from "../cadastro/endereco/handleEndereco";

function handleSubmit(event, endereco, setEnderecoError, router, dispatch) {
  event.preventDefault();

  if (handleEndereco(endereco, setEnderecoError)) {
    const formData = new FormData(event.currentTarget);

    let date = new Date(localStorage.nascimento);
    let ano = date.getFullYear();
    let mes = (date.getMonth() + 1).toString().padStart(2, "0");
    let dia = date.getDate().toString().padStart(2, "0");

    formData.append("nascimento", `${ano}-${mes}-${dia}`);

    let user = {
      nome: `${formData.get("primeiroNome")} ${formData.get("ultimoNome")}`,
      dataNascimento: formData.get("nascimento"),
      genero: formData.get("genero"),
      email: formData.get("email"),
      senha: formData.get("senha"),

      cep: formData.get("cep"),
      bairro: formData.get("bairro"),
      logradouro: formData.get("logradouro"),
      numero: formData.get("numero"),
      cidade: formData.get("cidade"),
      uf: formData.get("estado"),
      complemento: formData.get("complemento"),
    };

    axios
      .post("api/user/cadastro", user)
      .then((response) => {
        dispatch(loginUser(response.data));
        router.push("/curriculo");
        localStorage.clear();
      })
      .catch((error) => {
        alert("Erro ao cadastrar usuário. Tente novamente mais tarde.");
        console.error(error);
      });
  }
}

export default handleSubmit;
