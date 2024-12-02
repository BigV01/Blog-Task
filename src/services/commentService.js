const { Comment } = require('../models');

exports.createComment = async (postId, content, parentId) => {
  return await Comment.create({ postId, content, parentId });
};

exports.getCommentsForPost = async (postId) => {
  return await Comment.findAll({ where: { postId }, include: { all: true, nested: true } });
};