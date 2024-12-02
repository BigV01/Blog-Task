const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Post = sequelize.define('Post', {
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
  tags: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: true },
});

module.exports = Post;