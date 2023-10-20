const Sequelize = require("sequelize");

const database = new Sequelize(
  process.env.DATA_BASE,
  process.env.USER_DB,
  process.env.PASSWORD_DB,
  {
    dialect: "mysql",
    dialectOptions: {
      ssl: {
        ssl: {
          ca: process.env.CA_CERTIFICATE,
        },
      },
    },
    host: process.env.DATA_BASE_URL,
    port: 3306,
  },
);

module.exports = database;
