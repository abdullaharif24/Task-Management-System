const request = require('supertest');
const app = require('../../index');

describe('User Controller Tests', () => {
    let token;

    beforeAll(async () => {
        const res = await request(app)
            .post('/api/auth/login')
            .send({ username: 'testuser', password: 'testpassword' });
        token = res.body.token;
    });

    it('should get user profile', async () => {
        const res = await request(app)
            .get('/api/users/profile')
            .set('x-auth-token', token);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('_id');
        expect(res.body).not.toHaveProperty('password');
    });
});
