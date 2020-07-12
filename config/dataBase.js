const { Sequelize } = require("sequelize");

const db = new Sequelize("All_inclusive", "postgres", "123", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = { db };