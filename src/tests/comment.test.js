const request = require('supertest');
const app = require('../app');

describe('Comment API', () => {
  it('should create a comment on a post', async () => {
    const res = await request(app).post('/comments').send({
      postId: 1,
      content: 'Great post!',
    });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });
});