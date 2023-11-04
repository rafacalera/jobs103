const Sequelize = require("sequelize");
const database = require("../infra/db");
const Aluno = require("./user");

const CommonKnowledge = database.define("conhecimentoComum", {
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
  conhecimento: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

CommonKnowledge.belongsTo(Aluno, {
  constraint: true,
  foreignKey: "alunoId",
});

Aluno.hasMany(CommonKnowledge, {
  foreignKey: "alunoId",
});

module.exports = CommonKnowledge;
