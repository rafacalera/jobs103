const Sequelize = require("sequelize");
const database = require("../infra/db");
const Aluno = require("./user");

const ExtraCourses = database.define("cursoExtracurricular", {
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
  tipo: {
    type: Sequelize.ENUM("COURSE", "LECTURE"),
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

ExtraCourses.belongsTo(Aluno, {
  constraint: true,
  foreignKey: "alunoId",
});

Aluno.hasMany(ExtraCourses, {
  foreignKey: "alunoId",
});

module.exports = ExtraCourses;
