const { DataTypes } = require("sequelize");
const sequelize = require("../database")

const Project = sequelize.define(
  "project",
  {
    // Model attributes
    id: {
      type: DataTypes.DECIMAL,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    // Model options
  }
);

module.exports = Project;
