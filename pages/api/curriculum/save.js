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
      return res.status(500).json({ error: "Internal server error" });
    });
  }
  academicEducation?.items.forEach(async (item) => {
    await AcademicEducation.create({
      alunoId: userId,
      instituicao: item.instituicao,
      curso: item.curso,
      grauFormacao: item.grauFormacao,
      dataInicio: item.dataInicio,
      dataFim:
        item.dataFim !== null &&
        item.dataFim !== "YYYY-MM" &&
        item.dataFim.length > 0
          ? item.dataFim
          : null,
      totalHoras: item.totalHoras,
    }).catch((err) => {
      console.log("Error: ", err);
      return res.status(500).json({ error: "Internal server error" });
    });
  });

  if (
    await ExtraCourses.findAll({
      where: {
        alunoId: userId,
      },
    })
  ) {
    await ExtraCourses.destroy({
      where: {
        alunoId: userId,
      },
    }).catch((err) => {
      console.log("Error: ", err);
      return res.status(500).json({ error: "Internal server error" });
    });
  }
  extraCourses?.items.forEach(async (item) => {
    await ExtraCourses.create({
      alunoId: userId,
      instituicao: item.instituicao,
      curso: item.curso,
      tipo: item.tipo,
      dataInicio: item.dataInicio,
      dataFim:
        item.dataFim !== null &&
        item.dataFim !== "YYYY-MM" &&
        item.dataFim.length > 0
          ? item.dataFim
          : null,
      totalHoras: item.totalHoras,
    }).catch((err) => {
      console.log("Error: ", err);
      return res.status(500).json({ error: "Internal server error" });
    });
  });

  if (
    await ProfessionalExpirience.findAll({
      where: {
        alunoId: userId,
      },
    })
  ) {
    await ProfessionalExpirience.destroy({
      where: {
        alunoId: userId,
      },
    }).catch((err) => {
      console.log("Error: ", err);
      return res.status(500).json({ error: "Internal server error" });
    });
  }
  professionalExperience?.items.forEach(async (item) => {
    await ProfessionalExpirience.create({
      alunoId: userId,
      empresa: item.empresa,
      cargo: item.cargo,
      descricao: item.descricao?.trim().length === 0 ? null : item.descricao,
      dataInicio: item.dataInicio,
      dataFim:
        item.dataFim !== null &&
        item.dataFim !== "YYYY-MM" &&
        item.dataFim.length > 0
          ? item.dataFim
          : null,
    }).catch((err) => {
      console.log("Error: ", err);
      return res.status(500).json({ error: "Internal server error" });
    });
  });

  if (
    await Languages.findAll({
      where: {
        alunoId: userId,
      },
    })
  ) {
    await Languages.destroy({
      where: {
        alunoId: userId,
      },
    }).catch((err) => {
      console.log("Error: ", err);
      return res.status(500).json({ error: "Internal server error" });
    });
  }
  language?.items.forEach(async (item) => {
    await Languages.create({
      alunoId: userId,
      idioma: item.idioma,
      nivel: item.nivel,
    }).catch((err) => {
      console.log("Error: ", err);
      return res.status(500).json({ error: "Internal server error" });
    });
  });

  if (
    await CommonKnowledge.findAll({
      where: {
        alunoId: userId,
      },
    })
  ) {
    await CommonKnowledge.destroy({
      where: {
        alunoId: userId,
      },
    }).catch((err) => {
      console.log("Error: ", err);
      return res.status(500).json({ error: "Internal server error" });
    });
  }
  commonKnowledge?.items.forEach(async (item) => {
    await CommonKnowledge.create({
      alunoId: userId,
      conhecimento: item.conhecimento,
    }).catch((err) => {
      console.log("Error: ", err);
      return res.status(500).json({ error: "Internal server error" });
    });
  });
  res.status(201).json({ success: true });
}

export default verifyJWT(saveData);
