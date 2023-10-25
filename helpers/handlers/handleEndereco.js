export default function handleEndereco(endereco, setEnderecoError) {
  setEnderecoError((prev) => ({
    ...prev,
    cep: "",
  }));
  setEnderecoError((prev) => ({
    ...prev,
    logradouro: "",
  }));
  setEnderecoError((prev) => ({
    ...prev,
    numero: "",
  }));
  setEnderecoError((prev) => ({
    ...prev,
    bairro: "",
  }));
  setEnderecoError((prev) => ({
    ...prev,
    cidade: "",
  }));
  setEnderecoError((prev) => ({
    ...prev,
    estado: "",
  }));
  setEnderecoError((prev) => ({
    ...prev,
    complemento: "",
  }));

  if (endereco.cep.replace(/\D/g, "").trim().length === 0 || endereco.cep < 1) {
    setEnderecoError((prev) => ({
      ...prev,
      cep: "É preciso inserir um válido Cep para continuar",
    }));
    return false;
  }

  if (endereco.bairro.trim().length < 3) {
    setEnderecoError((prev) => ({
      ...prev,
      bairro: "É preciso inserir o bairro para continuar",
    }));
    return false;
  }

  if (endereco.bairro.length > 255) {
    setEnderecoError((prev) => ({
      ...prev,
      bairro: "Nome do bairro passa do limite de caracteres válido",
    }));
    return false;
  }

  if (
    endereco.logradouro.trim().length === 0 ||
    endereco.logradouro.length > 255
  ) {
    setEnderecoError((prev) => ({
      ...prev,
      logradouro: "É preciso inserir a Rua para continuar",
    }));
    return false;
  }

  if (endereco.logradouro.length > 255) {
    setEnderecoError((prev) => ({
      ...prev,
      logradouro: "Nome da Rua passa do limite de caracteres válido",
    }));
    return false;
  }

  if (
    endereco.numero.replace(/\D/g, "").trim().length === 0 ||
    endereco.numero < 1
  ) {
    setEnderecoError((prev) => ({
      ...prev,
      numero: "É preciso inserir um número de residência válido para continuar",
    }));
    return false;
  }
  if (endereco.cidade.trim().length === 0) {
    setEnderecoError((prev) => ({
      ...prev,
      cidade: "É preciso inserir o número da residência para continuar",
    }));
    return false;
  }
  if (endereco.cidade.length > 100) {
    setEnderecoError((prev) => ({
      ...prev,
      cidade: "Nome da cidade ultrapassa o limite de caracteres válido",
    }));
    return false;
  }

  if (endereco.estado.trim().length === 0) {
    setEnderecoError((prev) => ({
      ...prev,
      estado: "É preciso inserir o estado referente para continuar",
    }));
    return false;
  }

  if (endereco.complemento > 200) {
    setEnderecoError((prev) => ({
      ...prev,
      estado: "Complemento do endereço passa o limite de caracteres válido",
    }));
    return false;
  }

  return true;
}
