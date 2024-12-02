const request = require('supertest');
const app = require('../app');

describe('Post API', () => {
  it('should create a new post', async () => {
    const res = await request(app).post('/posts').send({
      title: 'Test Post',
      content: 'Test Content',
      tags: ['Node.js', 'API'],
    });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });
});