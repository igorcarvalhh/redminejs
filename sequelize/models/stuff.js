const { DataTypes } = require("sequelize");
const sequelize = require("../database")

const Stuff = sequelize.define(
  "stuff",
  {
    // Model attributes
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    content: {
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

module.exports = Stuff;
