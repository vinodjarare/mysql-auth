const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("mysql-auth", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
