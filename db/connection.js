'use strict'

const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'node_review',
  username: 'root',
  password: 'Deepweb1',
  dialect: 'mysql'
});

module.exports = {
  sequelize
}
