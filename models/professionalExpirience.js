const Sequelize = require("sequelize");
const database = require("../infra/db");
const Aluno = require("./user");

const ProfessionalExpirience = database.define("experienciaProfissional", {
  id: {
    type: Sequelize.BIGINT,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  empresa: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  cargo: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  descricao: Sequelize.TEXT,
  dataInicio: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  dataFim: Sequelize.DATEONLY,
});

ProfessionalExpirience.belongsTo(Aluno, {
  constraint: true,
  foreignKey: "alunoId",
});

Aluno.hasMany(ProfessionalExpirience, {
  foreignKey: "alunoId",
});

module.exports = ProfessionalExpirience;
