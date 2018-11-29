process.env.NODE_ENV = 'test';
const { expect } = require('chai');
const app = require('../app')
const request = require('supertest')(app)


describe('/api', () => {
  describe('/films', () => {
    it('GET responds with status 200 and an array of films', () => {
      return request
        .get('/api/films')
        .expect(200)
        .then(res => {
          expect(res.body.films).to.be.an('array')
          expect(res.body.films.length).to.equal(2);
        })
    });
  });
});