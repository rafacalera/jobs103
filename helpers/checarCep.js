async function checarCep(e, setEndereco, setEnderecoError) {
  const eventCep = e.target.value.replace(/\D/g, "");

  setEnderecoError((prev) => ({
    ...prev,
    cep: "",
  }));

  if (eventCep.trim() == "") {
    return false;
  }

  try {
    const res = await fetch(`https://viacep.com.br/ws/${eventCep}/json/`);
    const data = await res.json();
    setEndereco((prev) => ({
      ...prev,
      logradouro: data.logradouro,
      bairro: data.bairro,
      cidade: data.localidade,
      estado: data.uf,
      complemento: data.complemento,
    }));
  } catch (error) {
    setEnderecoError((prev) => ({
      ...prev,
      cep: "Cep Inválido",
    }));
    setEndereco((prev) => ({
      ...prev,
      logradouro: "",
      bairro: "",
      cidade: "",
      estado: "",
      complemento: "",
    }));
  }
}

export default checarCep;
