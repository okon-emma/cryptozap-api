const { Sequelize } = require("sequelize");
const db = require("../config/db.config");

const Product = db.define("Product", {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    unique: true,
    defaultValue: Sequelize.UUIDV4,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: null,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: null,
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
    defaultValue: 0,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: null,
  },
});

module.exports = Product;
