const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Like = sequelize.define('Like', {
  type: { type: DataTypes.ENUM('post', 'comment'), allowNull: false },
  targetId: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = Like;