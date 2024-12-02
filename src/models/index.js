const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const User = require('./User')(sequelize, DataTypes);
const Post = require('./Post')(sequelize, DataTypes);
const Comment = require('./Comment')(sequelize, DataTypes);
const Like = require('./Like')(sequelize, DataTypes);

// Define relationships
Post.hasMany(Comment, { foreignKey: 'postId', as: 'comments' });
Comment.belongsTo(Post, { foreignKey: 'postId' });

Comment.hasMany(Comment, { foreignKey: 'parentId', as: 'replies' });
Comment.belongsTo(Comment, { foreignKey: 'parentId', as: 'parentComment' });

Post.hasMany(Like, { foreignKey: 'targetId', scope: { type: 'post' }, as: 'postLikes' });
Comment.hasMany(Like, { foreignKey: 'targetId', scope: { type: 'comment' }, as: 'commentLikes' });

module.exports = {
  sequelize,
  User,
  Post,
  Comment,
  Like,
};