'use strict'

const Sequelize = require('sequelize');

const sequelize = require('../db/connection.js').sequelize;

const User = sequelize.define('user', {
  id: {
    type: Sequelize.BIGINT(11),
    primaryKey: true,
    allowNull: false
  },
  phoneNumber: {
    type: Sequelize.STRING(45),
    allowNull: false
  },
  email: {
    type: Sequelize.STRING(45),
    allowNull: false
  },
  age: {
    type: Sequelize.STRING(45),
    allowNull: false
  },
  gender: {
    type: Sequelize.STRING(45),
    allowNull: false
  },
}, {
  timestamps: false
});

module.exports = {
  User
}
