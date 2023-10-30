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
        label: "Data Inicio",
        type: "date",
        redux: "academicEducation",
      },
      {
        id: "dataFim",
        label: "Data Fim",
        type: "date",
        redux: "academicEducation",
      },
      {
        id: "totalHoras",
        label: "Carga Horária",
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
        type: "text",
        redux: "extraCourses",
      },
      {
        id: "curso",
        label: "Curso",
        type: "text",
        redux: "extraCourses",
      },
      {
        id: "tipo",
        label: "Tipo",
        //type: "text",
        values: [
          { placeholder: "Curso", value: "COURSE" },
          { placeholder: "Palestra", value: "LECTURE" },
        ],
        redux: "extraCourses",
      },
      {
        id: "dataInicio",
        label: "Data Inicio",
        type: "date",
        redux: "extraCourses",
      },
      {
        id: "dataFim",
        label: "Data Fim",
        type: "date",
        redux: "extraCourses",
      },
      {
        id: "totalHoras",
        label: "Carga Horária",
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
        type: "text",
        redux: "professionalExperience",
      },
      {
        id: "cargo",
        label: "Cargo",
        type: "text",
        redux: "professionalExperience",
      },
      {
        id: "descricao",
        label: "Descrição",
        type: "text",
        redux: "professionalExperience",
      },
      {
        id: "dataInicio",
        label: "Data Inicio",
        type: "date",
        redux: "professionalExperience",
      },
      {
        id: "dataFim",
        label: "Data Fim",
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
        type: "text",
        redux: "language",
      },
      {
        id: "nivel",
        label: "Nivel",
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
        type: "text",
        redux: "commonKnowledge",
      },
    ],
  },
];

export default Fields;
