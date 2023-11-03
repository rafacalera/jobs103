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
    section: "Informações Pessoais *",
    fields: [
      {
        id: "primeiroNome",
        label: "Nome",
        type: "text",
        required: true,
        redux: "basicInfos",
        disabled: true,
      },
      {
        id: "sobrenome",
        label: "Sobrenome",
        type: "text",
        required: true,
        redux: "basicInfos",
        disabled: true,
      },
      {
        labelId: "inputEstadoCivl",
        id: "estadoCivil",
        required: true,
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
        required: true,
        type: "email",
        redux: "basicInfos",
        disabled: true,
      },
      {
        id: "telefone",
        label: "Telefone para contato",
        type: "tel",
        required: true,
        redux: "basicInfos",
      },

      {
        id: "nascidoEm",
        label: "Cidadade natal",
        required: true,
        redux: "basicInfos",
      },
    ],
  },
  {
    section: "Endereço *",
    fields: [
      {
        id: "cep",
        label: "Cep",
        required: true,
        type: "number",
        redux: "basicInfos",
      },
      {
        id: "bairro",
        label: "Bairro",
        required: true,

        type: "text",
        redux: "basicInfos",
      },
      {
        id: "logradouro",
        label: "Rua",
        required: true,

        type: "text",
        redux: "basicInfos",
      },
      {
        id: "numero",
        label: "Número",
        required: true,

        type: "number",
        redux: "basicInfos",
      },
      {
        id: "cidade",
        label: "Cidade",
        required: true,

        type: "text",
        redux: "basicInfos",
      },
      {
        labelId: "inputUf",
        id: "uf",
        label: "Estado",
        required: true,

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
        required: true,
        type: "text",
        redux: "academicEducation",
      },
      {
        id: "curso",
        label: "Curso",
        required: true,

        type: "text",
        redux: "academicEducation",
      },
      {
        id: "grauFormacao",
        label: "Grau de Formação",
        required: true,
        //type: "text",
        redux: "academicEducation",
        values: [
          { placeholder: "Superior", value: "COLLEGE_DEGREE" },
          { placeholder: "Técnico", value: "TECHNICAL_DEGREE" },
          { placeholder: "Médio", value: "BASIC_DEGREE" },
        ],
      },
      {
        id: "dataInicio",
        label: "Data de início",
        required: true,

        type: "date",
        redux: "academicEducation",
      },
      {
        id: "dataFim",
        label: "Data de conclusão",
        type: "date",
        redux: "academicEducation",
      },
      {
        id: "totalHoras",
        label: "Carga Horária",
        required: true,

        type: "number",
        redux: "academicEducation",
      },
    ],
  },
  {
    section: "Cursos Extracurriculares",
    name: "extraCourses",
    type: "list",
    fields: [
      {
        id: "instituicao",
        label: "Instituição",
        required: true,

        type: "text",
        redux: "extraCourses",
      },
      {
        id: "curso",
        label: "Curso",
        required: true,

        type: "text",
        redux: "extraCourses",
      },
      {
        id: "tipo",
        label: "Tipo",
        required: true,

        //type: "text",
        values: [
          { placeholder: "Curso", value: "COURSE" },
          { placeholder: "Palestra", value: "LECTURE" },
        ],
        redux: "extraCourses",
      },
      {
        id: "dataInicio",

        label: "Data de início",
        required: true,
        type: "date",
        redux: "extraCourses",
      },
      {
        id: "dataFim",
        label: "Data de conclusão",
        type: "date",
        redux: "extraCourses",
      },
      {
        id: "totalHoras",
        label: "Carga Horária",
        required: true,

        type: "number",
        redux: "extraCourses",
      },
    ],
  },
  {
    section: "Experiências Profissionais",
    name: "professionalExperience",
    type: "list",
    fields: [
      {
        id: "empresa",
        label: "Empresa",
        required: true,

        type: "text",
        redux: "professionalExperience",
      },
      {
        id: "cargo",
        label: "Cargo",
        required: true,

        type: "text",
        redux: "professionalExperience",
      },
      {
        id: "descricao",
        label: "Descrição das atividades",
        type: "text",
        redux: "professionalExperience",
      },
      {
        id: "dataInicio",
        label: "Data de início",
        required: true,

        type: "date",
        redux: "professionalExperience",
      },
      {
        id: "dataFim",
        label: "Data de encerramento",
        type: "date",
        redux: "professionalExperience",
      },
    ],
  },
  {
    section: "Idiomas",
    name: "language",
    type: "list",
    fields: [
      {
        id: "idioma",
        label: "Idioma",
        required: true,

        type: "text",
        redux: "language",
      },
      {
        id: "nivel",
        label: "Nivel",
        required: true,

        //type: "text",
        redux: "language",
        values: [
          { placeholder: "Avançado", value: "ADVANCED" },
          { placeholder: "Intermediário", value: "INTERMEDIARY" },
          { placeholder: "Básico", value: "BASIC" },
        ],
      },
    ],
  },
  {
    section: "Outros Conhecimentos",
    name: "commonKnowledge",
    type: "list",
    fields: [
      {
        id: "conhecimento",
        label: "Conhecimento",
        required: true,

        type: "text",
        redux: "commonKnowledge",
      },
    ],
  },
];

export default Fields;
