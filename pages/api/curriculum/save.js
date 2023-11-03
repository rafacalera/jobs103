const User = require("../../../models/user");
const AcademicEducation = require("../../../models/academicEducation");
const CommonKnowledge = require("../../../models/commonKnowledge");
const ExtraCourses = require("../../../models/extraCourses");
const Languages = require("../../../models/languages");
const ProfessionalExpirience = require("../../../models/professionalExpirience");
import database from "../../../infra/db";
import verifyJWT from "../middleware";

export async function saveData(req, res) {
  if (req.method !== "POST") return res.status(400).send("Method not allowed");
  await database.sync();

  const userId = req.id;
  const {
    academicEducation,
    basicInfos,
    commonKnowledge,
    extraCourses,
    language,
    professionalExperience,
  } = req.body;

  const user = await User.findByPk(parseInt(userId));

  if (!user) {
    res.status(400).json({ error: "User not found" });
    return;
  }

  Object.entries(basicInfos).forEach(([key, value]) => {
    if (key !== "id" && key !== "email" && key !== "password")
      user[key] = value;
  });
  await user.save();

  if (
    await AcademicEducation.findAll({
      where: {
        alunoId: userId,
      },
    })
  ) {
    await AcademicEducation.destroy({
      where: {
        alunoId: userId,
      },
    }).catch((err) => {
      console.log("Error: ", err);
      res.status(500).json({ error: "Internal server error" });
    });
  }
  academicEducation?.items.forEach(async (item) => {
    await AcademicEducation.create({
      alunoId: userId,
      instituicao: item.instituicao,
      curso: item.curso,
      grauFormacao: item.grauFormacao,
      dataInicio: item.dataInicio,
      dataFim: item.dataFim,
      totalHoras: item.totalHoras,
    }).catch((err) => {
      console.log("Error: ", err);
      res.status(500).json({ error: "Internal server error" });
    });
  });
  res.status(200).json({ success: true });
}

export default verifyJWT(saveData);
