const Sequelize = require("sequelize");
const database = require("../infra/db");
const Aluno = require("./user");

const Language = database.define("idioma", {
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
  linguagem: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  nivel: {
    type: Sequelize.ENUM("BASIC", "INTERMEDIARY", "ADVANCED"),
    allowNull: false,
  },
});

Language.belongsTo(Aluno, {
  constraint: true,
  foreignKey: "alunoId",
});

Language.hasMany(Aluno, {
  foreignKey: "alunoId",
});
