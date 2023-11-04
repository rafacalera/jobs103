const checkRequiredFields = (basicInfos, message) => {
  !message ? (message = "antes de gerar o currículo") : (message = message);

  if (
    !basicInfos.estadoCivil ||
    basicInfos.estadoCivil.trim().length === 0 ||
    !basicInfos.telefone ||
    basicInfos.telefone.trim().length === 0 ||
    basicInfos.telefone.length > 20 ||
    !basicInfos.nascidoEm ||
    basicInfos.nascidoEm.trim().length === 0 ||
    basicInfos.nascidoEm.length > 100
  ) {
    alert("Preencha as Informações Pessoais corretamente " + message);
    return false;
  }

  const basicInfosValues = Object.entries(basicInfos);
  for (let i = 0; i < basicInfosValues.length; i++) {
    const [key, value] = basicInfosValues[i];
    if (String(value).trim().length === 0 && key !== "complemento") {
      alert("Preencha o Endereço corretamente " + message);
      return false;
    }
  }

  return true;
};
export { checkRequiredFields };
