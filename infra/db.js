const Sequelize = require("sequelize");
const mysql2 = require("mysql2");

const database = new Sequelize(
  process.env.DATA_BASE,
  process.env.USER_DB,
  process.env.PASSWORD_DB,
  {
    dialect: "mysql",
    dialectModule: mysql2,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
        ca: process.env.CA_CERTIFICATE.toString(),
      },
    },
    host: process.env.DATA_BASE_URL,
    port: 3306,
  },
);

module.exports = database;
