// test/stackController.test.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Stack Controller Tests', () => {
    it('should push an item to the stack', (done) => {
        chai.request(app)
            .post('/api/stack')
            .send({ item: 42 })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.success).to.be.true;
                done();
            });
    });

    it('should pop an item from the stack', (done) => {
        chai.request(app)
            .delete('/api/stack')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.success).to.be.true;
                done();
            });
    });

    it('should get the current state of the stack', (done) => {
        chai.request(app)
            .get('/api/stack')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('stack');
                done();
            });
    });
});

describe('Stack Size API Tests', () => {
    it('should not allow invalid stack size', (done) => {
        chai.request(app)
            .put('/api/stackSize')
            .send({ size: 'invalid' }) // Sending an invalid size
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.success).to.be.false;
                done();
            });
    });

    it('should update the stack size', (done) => {
        chai.request(app)
            .put('/api/stackSize')
            .send({ size: 20 }) // Set the new stack size
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.success).to.be.true;
                done();
            });
    });

    it('should retrieve the updated stack size', (done) => {
        chai.request(app)
            .get('/api/stackSize')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('size');
                expect(res.body.size).to.equal(20); // Verify the new stack size
                done();
            });
    });
});
