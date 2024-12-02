const { Comment } = require('../models');

exports.createComment = async (req, res) => {
  try {
    const { content, parentId } = req.body;
    const { postId } = req.params;

    const comment = await Comment.create({ content, parentId, postId });
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create comment', error: err.message });
  }
};