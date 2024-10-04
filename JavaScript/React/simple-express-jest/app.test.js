// app.test.js
const supertest = require('supertest');
const app = require('./app');

describe('GET /', () => {
    it('should respond with "Hello World!"', async () => {
        const response = await supertest(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello World!');
    });
});
