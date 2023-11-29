const { DataTypes } = require("sequelize");
const sequelize = require("../database")

const User = sequelize.define(
  "user",
  {
    // Model attributes
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Model options
  }
);

module.exports = User ;
