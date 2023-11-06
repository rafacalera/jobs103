const database = require("../../../infra/db");
const User = require("../../../models/user");
const AcademicEducation = require("../../../models/academicEducation");
const CommonKnowledge = require("../../../models/commonKnowledge");
const ExtraCourses = require("../../../models/extraCourses");
const Languages = require("../../../models/languages");
const ProfessionalExpirience = require("../../../models/professionalExpirience");
import verifyJWT from "../middleware";

export async function getInfos(req, res) {
  const userId = req.id;
  if (req.method === "GET") {
    await database.sync();

    const usuario = await User.findByPk(userId, {
      attributes: { exclude: ["id", "senha", "createdAt", "updatedAt"] },
    });
    const usuarioAcademicEducation = await AcademicEducation.findAll({
      attributes: { exclude: ["alunoId", "id", "createdAt", "updatedAt"] },
      where: {
        alunoId: userId,
      },
    });
    const usuarioCommonKnowledge = await CommonKnowledge.findAll({
      attributes: { exclude: ["alunoId", "id", "createdAt", "updatedAt"] },
      where: {
        alunoId: userId,
      },
    });
    const usuarioExtraCourses = await ExtraCourses.findAll({
      attributes: { exclude: ["alunoId", "id", "createdAt", "updatedAt"] },
      where: {
        alunoId: userId,
      },
    });
    const usuarioLanguages = await Languages.findAll({
      attributes: { exclude: ["alunoId", "id", "createdAt", "updatedAt"] },
      where: {
        alunoId: userId,
      },
    });
    const usuarioProfessionalExpirience = await ProfessionalExpirience.findAll({
      attributes: { exclude: ["alunoId", "id", "createdAt", "updatedAt"] },
      where: {
        alunoId: userId,
      },
    });
    usuario
      ? res.status(200).json({
          basicInfos: usuario,
          academicEducation: {
            items: usuarioAcademicEducation,
          },
          commonKnowledge: {
            items: usuarioCommonKnowledge,
          },
          extraCourses: {
            items: usuarioExtraCourses,
          },
          language: {
            items: usuarioLanguages,
          },
          professionalExperience: {
            items: usuarioProfessionalExpirience,
          },
        })
      : res.status(400).send("User not found");
    return;
  }
  res.status(400).send("Method not allowed");
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default verifyJWT(getInfos);
