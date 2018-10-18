const { expect } = require('chai');
const request = require('supertest');
const app = require('../app');
const Animal = require('../db').models.animal;

describe('Animal routes', () => {

    before('Synchronize the model', () => Animal.sync({ force:true }));

    beforeEach('Truncate data', () => Animal.truncate());

    describe('GET /api/animals', () => {
        it('responds with 200 and all animals in the database', async () => {

            const testAnimals = [
                Animal.create({ name: 'Peter', animal: 'Mouse', gender: 'Male', state: 'AL', details: 'text' }),
                Animal.create({ name: 'Sally', animal: 'Cat', gender: 'Female', state: 'LI', details: 'text' }),
                Animal.create({ name: 'Tommy', animal: 'Spider', gender: 'Male', state: 'NY', details: 'text' })
            ];

            await Promise.all(testAnimals);
            await request(app)
                .get('/api/animals')
                .expect(200)
                .then(responce => {
                    expect(responce.body).to.have.lengthOf(testAnimals.length);
                });

        });
    });
  
    describe('GET /api/animals/:id', () => {
        it('responds with 200 and the correct animal', async () => {
            
            const testAnimal = await Animal.create({ id: 1, name: 'Peter', animal: 'Mouse', gender: 'Male', state: 'AL', details: 'text' })

            await request(app)
                .get(`/api/animals/${testAnimal.id}`)
                .expect(200)
                .then(responce => {
                    expect(responce.body.name).to.equal(testAnimal.name)
                    expect(responce.body.animal).to.equal(testAnimal.animal)
                    expect(responce.body.gender).to.equal(testAnimal.gender)
                    expect(responce.body.state).to.equal(testAnimal.state)
                    expect(responce.body.details).to.equal(testAnimal.details)
                });
        });

        it('responds with 404 error if the ID is not correct', async () => {
            await request(app)
                .get('/api/animals/753275798')
                .expect(404)
        });
    });
  
    describe('POST /api/animals', () => {
        it('creates the animal and responds with 201', async () => {
            await request(app)
                .post('/api/animals')
                .send({ name: 'Tommy', animal: 'Spider', gender: 'Male', state: 'NY', details: 'text' })
                .expect(201)
            
            const test = await Animal.findOne({
                where: { name: 'Tommy', animal: 'Spider', gender: 'Male', state: 'NY', details: 'text' }
            });
            expect(test).to.exist;
        });
    });
  });