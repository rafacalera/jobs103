const checkRequiredFields = (basicInfos) => {
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
    alert(
      "Preencha as Informações Pessoais corretamente antes de gerar o currículo",
    );
    return false;
  }
  Object.entries(basicInfos).forEach(([key, value]) => {
    if (String(value).trim().length === 0 && key !== "complemento") {
      alert("Preencha o Endereço corretamente antes de gerar o currículo");
      return false;
    }
  });
};
export { checkRequiredFields };
