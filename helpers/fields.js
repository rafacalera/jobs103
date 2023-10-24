const estados = [
  { placeholder: "Acre", value: "AC" },
  { placeholder: "Alagoas", value: "AL" },
  { placeholder: "Amapá", value: "AP" },
  { placeholder: "Amazonas", value: "AM" },
  { placeholder: "Bahia", value: "BA" },
  { placeholder: "Ceará", value: "CE" },
  { placeholder: "Distrito Federal", value: "DF" },
  { placeholder: "Espírito Santo", value: "ES" },
  { placeholder: "Goiás", value: "GO" },
  { placeholder: "Maranhão", value: "MA" },
  { placeholder: "Mato Grosso", value: "MT" },
  { placeholder: "Mato Grosso do Sul", value: "MS" },
  { placeholder: "Minas Gerais", value: "MG" },
  { placeholder: "Pará", value: "PA" },
  { placeholder: "Paraíba", value: "PB" },
  { placeholder: "Paraná", value: "PR" },
  { placeholder: "Pernambuco", value: "PE" },
  { placeholder: "Piauí", value: "PI" },
  { placeholder: "Rio de Janeiro", value: "RJ" },
  { placeholder: "Rio Grande do Norte", value: "RN" },
  { placeholder: "Rio Grande do Sul", value: "RS" },
  { placeholder: "Rondônia", value: "RO" },
  { placeholder: "Roraima", value: "RR" },
  { placeholder: "Santa Catarina", value: "SC" },
  { placeholder: "São Paulo", value: "SP" },
  { placeholder: "Sergipe", value: "SE" },
  { placeholder: "Tocantins", value: "TO" },
];

const Fields = [
  {
    section: "Informações Pessoais",
    fields: [
      {
        id: "primeiroNome",
        label: "Nome",
        type: "text",
      },
      {
        id: "sobrenome",
        label: "Sobrenome",
        type: "text",
      },
      {
        labelId: "inputEstadoCivl",
        id: "estadoCivil",
        label: "Estado Civil",
        values: [
          { value: "Solteiro", placeholder: "Solteiro" },
          { value: "Casado", placeholder: "Casado" },
          { value: "Outro", placeholder: "Outro" },
        ],
      },
      {
        id: "email",
        label: "E-mail",
        type: "email",
      },
      { id: "telefone", label: "Telefone para contato", type: "tel" },
      { id: "nascidoEm", label: "Cidadade natal" },
    ],
  },
  {
    section: "Endereço",
    fields: [
      {
        id: "cep",
        label: "Cep",
        type: "number",
      },
      {
        id: "bairro",
        label: "Bairro",
        type: "text",
      },
      {
        id: "logradouro",
        label: "Rua",
        type: "text",
      },
      {
        id: "numero",
        label: "Número",
        type: "number",
      },
      {
        id: "cidade",
        label: "Cidade",
        type: "text",
      },
      {
        labelId: "inputUf",
        id: "uf",
        label: "Estado",
        values: estados,
      },
      { id: "complemento", label: "Complemento", type: "text" },
    ],
  },
];

export default Fields;
