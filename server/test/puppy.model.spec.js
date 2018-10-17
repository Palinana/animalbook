const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const Animal = require('../db').models.animal;

const expect = chai.expect;
chai.use(chaiAsPromised);

const testAnimal_1 = Animal.build({ name: 'Tommy', animal: 'Spider', gender: 'Male', state: 'NY', details: 'text' })
const testAnimal_2 = Animal.create({ name: 'Peter', animal: 'Mouse', gender: 'Male', state: 'AL', details: 'text' })
const testAnimal_3 = Animal.build({ name: 'Sally', animal: 'Cat', gender: 'Female', state: 'LI', details: 'text' })


describe('Animal model', () => {

    before('Synchronize the model', () => Animal.sync({ force: true }));
    // `truncate` removes all data in a table without dropping the entire table
    beforeEach('Truncate data', () => Animal.truncate());

    describe('Schema', () => {
        it('requires a "name" to a string', async () => {
            await expect(Animal.create()).to.be.rejected;
            await expect(Animal.create({ name: '' })).to.be.rejected;
            await expect(Animal.create({ name: ['Tommy'] })).to.be.rejected;
        });

        it('requires a "animal" to a string', async () => {
            await expect(Animal.create()).to.be.rejected;
            await expect(Animal.create({ animal: '' })).to.be.rejected;
            await expect(Animal.create({ animal: ['Snake'] })).to.be.rejected;
        });

        it('requires a "state" to a string', async () => {
            await expect(Animal.create()).to.be.rejected;
            await expect(Animal.create({ state: '' })).to.be.rejected;
            await expect(Animal.create({ state: ['CA'] })).to.be.rejected;
        });

        it('requires a "gender" to a string', async () => {
            await expect(Animal.create()).to.be.rejected;
            await expect(Animal.create({ gender: '' })).to.be.rejected;
            await expect(Animal.create({ gender: ['Male'] })).to.be.rejected;
        });

        it('requires a "details" to a text', async () => {
            await expect(Animal.create()).to.be.rejected;
            await expect(Animal.create({ details: '' })).to.be.rejected;
            await expect(Animal.create({ details: ['Male'] })).to.be.rejected;
        });

        it('expects "image" field to be a URL string if supplied', async () => {
            
            await expect(testAnimal_1.save()).to.be.fulfilled; // image url is optional
            //check for default value
            await expect(testAnimal_1.image).to.equal('https://loremflickr.com/400/400/dog');

            testAnimal_1.image = ['this is not a string'];
            await expect(testAnimal_1.save()).to.be.rejected;

            testAnimal_1.image = 'this is not a string'; //must be a URL type
            await expect(testAnimal_1.save()).to.be.rejected;
        });

        // it('defaults "DOB" to current date', async () => {
        //     const test = await testAnimal_2;
        //     const now = (new Date()).toISOString().slice(0,10);

        //     expect(test.DOB).to.be.equal(now);

        // });
    });

    describe('Virtuals', () => {
        describe('"age" getter', () => {
            let test;
            beforeEach(() => {
                test = testAnimal_3
            });

            it('calculates correct age based on date of birth', async () => {
                const now = new Date();
                const someTimeAgo = now.setMonth(now.getMonth() - 15);
                test.DOB = someTimeAgo;
                await expect(test.save()).to.eventually.have.property('age', '1yr 3mo');
            });

            it('returns "Unknown" if DOB is unknown', async () => {
                test.DOB = null;
                await expect(test.save()).to.eventually.have.property('age', 'Unknown');
            });
        });
    });
});