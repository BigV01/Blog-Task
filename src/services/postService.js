const { Post } = require('../models');

exports.createPost = async (title, content, tags) => {
  return await Post.create({ title, content, tags });
};

exports.updatePost = async (id, updatedData) => {
  const post = await Post.findByPk(id);
  if (!post) throw new Error('Post not found');
  return await post.update(updatedData);
};

exports.deletePost = async (id) => {
  const post = await Post.findByPk(id);
  if (!post) throw new Error('Post not found');
  return await post.destroy();
};