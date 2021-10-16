const { Sequelize } = require("sequelize");
const db = require("../config/db.config");

const User = db.define("User", {
  email: {
    type: Sequelize.STRING,
    primaryKey: true,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: null,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: null,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: null,
  },
  type: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: null,
  },
  referral: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: null,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: null,
  },
  otp: {
    type: Sequelize.STRING,
  },
  otpExpire: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  verified: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

module.exports = User;
