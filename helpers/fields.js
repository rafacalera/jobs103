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
        redux: "basicInfos",
      },
      {
        id: "sobrenome",
        label: "Sobrenome",
        type: "text",
        redux: "basicInfos",
      },
      {
        labelId: "inputEstadoCivl",
        id: "estadoCivil",
        label: "Estado Civil",
        redux: "basicInfos",
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
        redux: "basicInfos",
      },
      {
        id: "telefone",
        label: "Telefone para contato",
        type: "tel",
        redux: "basicInfos",
      },

      {
        id: "nascidoEm",
        label: "Cidadade natal",
        redux: "basicInfos",
        redux: "basicInfos",
      },
    ],
  },
  {
    section: "Endereço",
    fields: [
      {
        id: "cep",
        label: "Cep",
        type: "number",
        redux: "basicInfos",
      },
      {
        id: "bairro",
        label: "Bairro",
        type: "text",
        redux: "basicInfos",
      },
      {
        id: "logradouro",
        label: "Rua",
        type: "text",
        redux: "basicInfos",
      },
      {
        id: "numero",
        label: "Número",
        type: "number",
        redux: "basicInfos",
      },
      {
        id: "cidade",
        label: "Cidade",
        type: "text",
        redux: "basicInfos",
      },
      {
        labelId: "inputUf",
        id: "uf",
        label: "Estado",
        redux: "basicInfos",
        values: estados,
      },
      {
        id: "complemento",
        label: "Complemento",
        type: "text",
        redux: "basicInfos",
      },
    ],
  },
  {
    section: "Formação Acadêmica",
    name: "academicEducation",
    type: "list",
    fields: [
      {
        id: "instituicao",
        label: "Instituição",
        type: "text",
        redux: "academicEducation",
      },
      {
        id: "curso",
        label: "Curso",
        type: "text",
        redux: "academicEducation",
      },
      {
        id: "grauFormacao",
        label: "Grau de Formação",
        type: "text",
        redux: "academicEducation",
        values: [
          { placeholder: "Superior", value: "Superior" },
          { placeholder: "Técnico", value: "Tecnico" },
          { placeholder: "Médio", value: "Medio" },
        ],
      },
      {
        id: "dataInicio",
        label: "Data Inicio",
        type: "text",
        redux: "academicEducation",
      },
      {
        id: "dataFim",
        label: "Data Fim",
        type: "text",
        redux: "academicEducation",
      },
    ],
  },
  {
    section: "Outros Conhecimentos",
    name: "otherKnowledge",
    type: "list",
    fields: [
      {
        id: "conhecimento",
        label: "Conhecimento",
        type: "text",
        redux: "otherKnowledge",
      },
    ],
  },
];

export default Fields;
