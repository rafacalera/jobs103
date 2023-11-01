const Sequelize = require("sequelize");
const database = require("../infra/db");
const Aluno = require("./user");

const AcademicEducation = database.define("formacaoAcademia", {
  id: {
    type: Sequelize.BIGINT,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  alunoId: {
    type: Sequelize.BIGINT,
    allowNull: false,
  },
  instituicao: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  curso: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  grauFormacao: {
    type: Sequelize.ENUM("BASIC_DEGREE", "TECHNICAL_DEGREE", "COLLEGE_DEGREE"),
    allowNull: false,
  },
  dataInicio: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  dataFim: Sequelize.DATEONLY,
  totalHoras: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

AcademicEducation.belongsTo(Aluno, {
  constraint: true,
  foreignKey: "alunoId",
});

AcademicEducation.hasMany(Aluno, {
  foreignKey: "alunoId",
});
