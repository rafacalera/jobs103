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
      personalInfos: {
        primeiroNome: formData.get("primeiroNome"),
        ultimoNome: formData.get("ultimoNome"),
        nascimento: formData.get("nascimento"),
        genero: formData.get("genero"),
        email: formData.get("email"),
        senha: formData.get("senha"),
      },
      address: {
        cep: formData.get("cep"),
        bairro: formData.get("bairro"),
        logradouro: formData.get("logradouro"),
        numero: formData.get("numero"),
        cidade: formData.get("cidade"),
        estado: formData.get("estado"),
        complemento: formData.get("complemento"),
      },
    };

    dispatch(loginUser(user));
    router.push("/curriculo");

    localStorage.clear();
  }
}

export default handleSubmit;
