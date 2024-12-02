const { Like } = require('../models');

exports.toggleLike = async (userId, targetId, type) => {
  const existingLike = await Like.findOne({ where: { userId, targetId, type } });

  if (existingLike) {
    await existingLike.destroy();
    return { message: 'Like removed' };
  }

  return await Like.create({ userId, targetId, type });
};