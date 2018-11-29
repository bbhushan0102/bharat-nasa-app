process.env.NODE_ENV = 'test';
const app = require('../app');
const request = require('supertest')(app);
const { expect } = require('chai');

describe('/api', () => {
  describe('/pokemon', () => {
    it('GET returns object with pokemon array and returns a 200 status', () => {
      return request
        .get('/api/pokemon')
        .expect(200)
        .then(res => {
          expect(res.body.pokemon.length).to.equal(3);
          expect(res.body.pokemon[0].pokemon_name).to.equal('Test Pokemon 1');
          expect(res.body.pokemon[0].type1).to.equal(1);
        });
    });
    it('POST adds an additional pokemon and returns a 201 status', () => {
      return request
        .post('/api/pokemon')
        .send({ pokemon_name: 'Test Pokemon 4', image_url: 'this is an image url', type1: 3 })
        .expect(201)
        .then(res => {
          expect(res.body.pokemon.pokemon_name).to.equal('Test Pokemon 4');
          expect(res.body.pokemon.type1).to.equal(3);
          return request.get('/api/pokemon').then(res => {
            expect(res.body.pokemon.length).to.equal(4);
          });
        });
    });
    it('POST returns a 400 status and error message when a required field is missing', () => {
      return request
        .post('/api/pokemon')
        .send({ image_url: 'image url string here', type1: 1 })
        .expect(400)
        .then(res => {
          expect(res.body.msg).to.equal('null value in column "pokemon_name" violates not-null constraint');
        });
    });
    it('POST returns a 400 status and error message when an invalid value is passed to a field', () => {
      return request
        .post('/api/pokemon')
        .send({ pokemon_name: 'Spinal Tap', type1: 'hello' })
        .expect(400)
        .then(res => {
          expect(res.body.msg).to.equal('invalid input syntax for integer: "hello"');
        });
    });
    describe('/:pokemon_id', () => {
      it('GET returns the requested pokemon object and a 200 status', () => {
        return request
          .get('/api/pokemon/2')
          .expect(200)
          .then(res => {
            expect(res.body.pokemon.pokemon_name).to.equal('Test Pokemon 2');
            expect(res.body.pokemon.type1).to.equal(2);
          });
      });
      it('GET returns returns a 400 status and error message for an invalid pokemon ID', () => {
        return request
          .get('/api/pokemon/abc')
          .expect(400)
          .then(res => {
            expect(res.body.msg).to.equal('invalid input syntax for integer: "abc"');
          });
      });
      it('GET returns returns a 404 status and error message for a pokemon ID that does not yet exist', () => {
        return request
          .get('/api/pokemon/999999')
          .expect(400)
          .then(res => {
            expect(res.body.msg).to.equal('No data returned from the query.');
          });
      });
    });
  });
});
