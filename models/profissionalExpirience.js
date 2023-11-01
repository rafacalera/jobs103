const Sequelize = require("sequelize");
const database = require("../infra/db");
const Aluno = require("./user");

const ProfissionalExpirience = database.define("experienciaProfissional", {
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

ProfissionalExpirience.belongsTo(Aluno, {
  constraint: true,
  foreignKey: "alunoId",
});

ProfissionalExpirience.hasMany(Aluno, {
  foreignKey: "alunoId",
});
