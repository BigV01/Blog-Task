const { Like } = require('../models');

exports.toggleLike = async (req, res) => {
  try {
    const { targetId, type } = req.body;

    const existingLike = await Like.findOne({
      where: { userId: req.user.id, targetId, type },
    });

    if (existingLike) {
      await existingLike.destroy();
      return res.status(200).json({ message: 'Like removed' });
    }

    const like = await Like.create({ userId: req.user.id, targetId, type });
    res.status(201).json(like);
  } catch (err) {
    res.status(500).json({ message: 'Failed to toggle like', error: err.message });
  }
};