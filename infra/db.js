const Sequelize = require("sequelize");
const database = new Sequelize("jobs103", "root", "senha", {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
});

module.exports = database;
