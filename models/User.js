const sequelize = require("../config/db");
const { Sequelize, DataTypes } = require("sequelize");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("user", "admin"),
      defaultValue: "user",
    },
    resetPasswordToken: {
      type: DataTypes.INTEGER,
    },
    resetPasswordTokenExpiration: {
      type: DataTypes.DATE,
    },
  },
  { timestamps: false }
);

module.exports = User;
