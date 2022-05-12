const request = require('supertest');
const mongoose = require('mongoose');

const app = require('../app');
const Article = require('../models/article.model');

describe('Article requests', () => {

    beforeAll(async () => {
        await mongoose.connect('mongodb://127.0.0.1:27017/aepimern');
    });

    afterAll(() => {
        mongoose.disconnect();
    });

    describe('GET /api/articles', () => {

        let response;
        beforeEach(async () => {
            response = await request(app).get('/api/articles').send();
        });

        it('debería devolver una respuesta correcta', () => {
            expect(response.statusCode).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        });

        it('debería devolver un array de artículos', () => {
            expect(response.body).toBeInstanceOf(Array);
        });

    });

    describe('POST /api/articles', () => {

        let response;
        beforeEach(async () => {
            response = await request(app).post('/api/articles').send({
                title: 'Test article',
                text: 'Este es el texto',
                createdAt: new Date(),
                category: 'test',
                author: 'Mario'
            });
        });

        afterAll(async () => {
            await Article.deleteMany({ category: 'test' });
        });

        it('debería devolver una respuesta correcta', () => {
            expect(response.statusCode).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        });

        it('debería devolver el id en la respuesta', () => {
            expect(response.body._id).toBeDefined();
        });

    });

    describe('PUT /api/articles', () => {

        let articleToEdit;
        let response;
        beforeAll(async () => {
            // Creación del artículo para probar
            articleToEdit = await Article.create({
                title: 'Test Title',
                text: 'Texto de prueba',
                createdAt: new Date(),
                category: 'test',
                author: 'Mario'
            });
            // Lanzar la petición de edición
            response = await request(app)
                .put(`/api/articles/${articleToEdit._id}`)
                .send({ author: 'Luis' });
        });

        afterAll(async () => {
            await Article.findByIdAndDelete(articleToEdit._id);
        });

        it('debería devolver una respuesta correcta', () => {
            expect(response.statusCode).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        });

        it('deberían estar los cambios en el body de la respuesta', () => {
            expect(response.body.author).toEqual('Luis');
        });

    })

});