const dayjs = require("dayjs");
const customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);
import verifyJWT from "../middleware";
import axios from "axios";

export async function postDownload(req, res) {
  if (req.method !== "POST") return res.status(400).send("Method not allowed");

  const {
    academicEducation,
    basicInfos,
    commonKnowledge,
    extraCourses,
    language,
    professionalExperience,
  } = req.body;

  const age = dayjs().diff(
    dayjs(basicInfos.dataNascimento, "YYYY-MM-DD"),
    "year",
  );

  const personalDataJSON = {
    name: basicInfos.nome,
    phones: [basicInfos.telefone],
    maritalStatus: basicInfos.estadoCivil,
    email: basicInfos.email,
    bornIn: basicInfos.nascidoEm,
    age: parseInt(age),
    address: {
      street: basicInfos.logradouro,
      number: basicInfos.numero,
      complement: basicInfos.complemento,
      neighborhood: basicInfos.bairro,
      city: basicInfos.cidade,
      state: basicInfos.uf,
    },
  };

  const academicEducationJSON = [];
  academicEducation?.items.forEach((item) => {
    const dataFim = item.dataFim === "YYYY-MM" ? undefined : item.dataFim;
    academicEducationJSON.push({
      degree: item.grauFormacao,
      institution: item.instituicao,
      course: item.curso,
      from: item.dataInicio,
      to: dataFim,
      amountHours: parseInt(item.totalHoras),
    });
  });

  const extraCoursesJSON = [];
  extraCourses?.items.forEach((item) => {
    const dataFim = item.dataFim === "YYYY-MM" ? undefined : item.dataFim;
    extraCoursesJSON.push({
      institution: item.instituicao,
      course: item.curso,
      type: item.tipo,
      from: item.dataInicio,
      to: dataFim,
      amountHours: parseInt(item.totalHoras),
    });
  });

  const languagesJSON = [];
  language?.items.forEach((item) => {
    languagesJSON.push({
      language: item.idioma,
      level: item.nivel,
    });
  });

  const commonKnowledgeJSON = [];

  commonKnowledge?.items.forEach((item) => {
    commonKnowledgeJSON.push(item.conhecimento);
  });

  const professionalExperienceJSON = [];

  professionalExperience?.items.forEach((item) => {
    const dataFim = item.dataFim === "YYYY-MM" ? undefined : item.dataFim;

    professionalExperienceJSON.push({
      company: item.empresa,
      job: item.cargo,
      description: item.descricao,
      start: item.dataInicio,
      end: dataFim,
    });
  });

  await axios
    .post(
      // replace this after to a env variable
      "https://jobs103-curriculum-api.azurewebsites.net/curriculum/generator",
      {
        personalData: personalDataJSON,
        academicEducations: academicEducationJSON,
        courses: extraCoursesJSON,
        languages: languagesJSON,
        commonKnowledge: commonKnowledgeJSON,
        professionalExperiences: professionalExperienceJSON,
      },
    )
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((err) => {
      res.status(400).send("Erro :" + err);
    });
}

// export default verifyJWT(postDownload);
export default postDownload;
