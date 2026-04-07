const request = require('supertest');
const app = require('../src/index');

describe('AI Agent API Tests', () => {
  
  test('GET / should return welcome message', async () => {
    const response = await request(app)
      .get('/')
      .expect(200);
    
    expect(response.body).toEqual({
      message: 'AI Agent is running',
      status: 'online'
    });
  });

  test('GET /health should return health status', async () => {
    const response = await request(app)
      .get('/health')
      .expect(200);
    
    expect(response.body).toHaveProperty('status', 'healthy');
    expect(response.body).toHaveProperty('timestamp');
  });
});
