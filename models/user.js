const Sequelize = require("sequelize");
const database = require("../infra/db");

const User = database.define("Aluno", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING(200),
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING(200),
    allowNull: false,
  },
  senha: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  dataNascimento: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },

  genero: {
    type: Sequelize.ENUM("Masculino", "Feminino", "Outro"),
    allowNull: false,
  },

  cep: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  logradouro: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  bairro: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  numero: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  uf: {
    type: Sequelize.CHAR(2),
    allowNull: false,
  },
  cidade: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  complemento: Sequelize.STRING(200),
  nascidoEm: Sequelize.STRING(100),
  estadoCivil: Sequelize.STRING(50),
  telefone: Sequelize.INTEGER,
});

module.exports = User;
