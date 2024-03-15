const request = require('supertest');
const app = require('../../index');

describe('Task Controller Tests', () => {
    let token;

    beforeAll(async () => {
        const res = await request(app)
            .post('/api/auth/login')
            .send({ username: 'testuser', password: 'testpassword' });
        token = res.body.token;
    });

    it('should create a new task', async () => {
        const res = await request(app)
            .post('/api/tasks')
            .set('x-auth-token', token)
            .send({ title: 'Test Task', description: 'Test Description', dueDate: '2024-03-20', category: 'Work', priority: 'High' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('_id');
    });

    it('should get all tasks', async () => {
        const res = await request(app)
            .get('/api/tasks')
            .set('x-auth-token', token);
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
