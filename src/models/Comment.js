const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Comment = sequelize.define('Comment', {
  content: { type: DataTypes.TEXT, allowNull: false },
  parentId: { type: DataTypes.INTEGER, allowNull: true },
});

module.exports = Comment;