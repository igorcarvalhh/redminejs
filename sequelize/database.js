const { Sequelize } = require("sequelize");
const db = require("./config")

const sequelize = new Sequelize(db.database, db.username, db.password, {
  host: db.hostname,
  dialect: db.dialect,
  port: db.port,
  direct: {
    freezeTableName: true,
  },
});

module.exports = sequelize