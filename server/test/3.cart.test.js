const chai = require("chai");
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('../app');
const clearDb = require("../helpers/test/clearDb");

chai.use(chaiHttp);

after(function (done) {
    console.log('Clear Database')
    clearDb(done);
  });

describe('Cart tests', function () {
  describe('POST /carts', function () {
    it('success register cart with status 201', function (done) {
      let cart = {
        
      };

      chai
        .request(app)
        .post('/api/carts')
        .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDYwYzNjY2NhYWM2ZjEyODdiYmRjYmIiLCJlbWFpbCI6ImFkaXR5YUBtYWlsLmNvbSIsInVzZXJuYW1lIjoiYWRpdHlhIiwicm9sZSI6InVzZXIiLCJpYXQiOjE1NjY2MjMwMzl9.sJKzn5YQnzeyDPtWwRsEKn06K-lYjKrRpJAlgb-qCUY')
        .send(cart)
        .end(function (err, res) {
          
          expect(err).to.be.null;
          expect(res).to.have.status(201);
          expect(res.body).to.be.an('object')
          done()
        });
    });
  });
});