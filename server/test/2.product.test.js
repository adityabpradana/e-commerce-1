const chai = require("chai");
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('../app');
const clearDb = require("../helpers/test/clearDb");
const fs = require('fs')

chai.use(chaiHttp);

after(function (done) {
  console.log('Clear Database')
  clearDb(done);
});

describe('Product tests', function () {
  describe('POST /products', function () {
    it('success register product with status 201', function (done) {
      let product = {
          name: "Test",
          price: 90000,
          stock: 88
      };

      chai
        .request(app)
        .post('/api/products')
        .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDYwYzNlYWNhYWM2ZjEyODdiYmRjYmMiLCJlbWFpbCI6ImFkbWluQG1haWwuY29tIiwidXNlcm5hbWUiOiJhZG1pbiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTU2NjYyMzA5NH0.wJxdgeDUJkXDzkTcVcUxAnrRHd5h_F0sDxDjkKQqJL0')
        .attach('file', fs.readFileSync('./test/turill.jpg'), 'turill.jpg')
        .send(product)
        .end(function (err, res) {
          
          expect(err).to.be.null;
          expect(res).to.have.status(201);
          expect(res.body).to.be.an('object')
          done()
        });
    });
  });
});