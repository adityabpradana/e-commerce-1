const chai = require("chai");
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('../app');
const clearDb = require("../helpers/test/clearDb")

chai.use(chaiHttp);

after(function (done) {
  console.log('Clear Database')
  clearDb(done);
});

describe('User tests', function () {
  describe('POST /users/register', function () {
    it('success register user with status 201', function (done) {
      let user = {
        email: 'test@mail.com',
        password: '12345678',
        username: 'Test'
      };

      chai
        .request(app)
        .post('/api/users/register')
        .send(user)
        .end(function (err, res) {
          
          expect(err).to.be.null;
          expect(res).to.have.status(201);
          expect(res.body).to.be.an('object')
          expect(res.body.email).to.equal('test@mail.com')
          expect(res.body.username).to.equal('Test')
          expect(res.body.password).to.not.equal('12345678')
          expect(res.body).to.have.keys(['_id', 'email', 'password']);
          done()
        });
    });
  });

  describe('POST /users/login', function () {
    it('Success login with status 200', function (done) {
      let user = {
        email: 'test@mail.com',
        password: '12345678'
      };
      chai
        .request(app)
        .post('/api/users/login')
        .send(user)
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object')
          expect(res.body).to.have.keys('access_token')
          done();
        })
    })
  });
});