require("dotenv/config");
const Sequelize = require("sequelize");

const database = new Sequelize(
  process.env.DATA_BASE,
  process.env.USER_DB,
  process.env.PASSWORD_DB,
  {
    dialect: "mysql",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    host: process.env.DATA_BASE_URL,
    port: 3306,
  },
);

module.exports = database;
