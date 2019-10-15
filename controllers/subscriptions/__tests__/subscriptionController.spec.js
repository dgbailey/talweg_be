const request = require('supertest');
const {s:server} = require('../../../server');

describe('Tests for token protection',() =>{
    it('Returns 401 and appropriate json response',() =>{
        return request(server)
        .get('/subscriptions/')
        .expect(401)
        .then(response => expect(response.body).toEqual({error:"Credentials needed"}));
    })
})