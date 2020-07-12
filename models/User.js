const { Sequelize } = require("sequelize");
const db = require("../config/dataBase");

const User = db.define("user", {
  login: { type: Sequelize.STRING, require: true, unique: true },
  password: { type: Sequelize.STRING, require: true },
});

module.exports = { User };
