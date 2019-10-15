const request = require('supertest');
const {s:server} = require('../../../server');
const {generateToken} = require('../../../auth/auth');

describe('Tests for token protection',() =>{

    // let token;
    // beforeAll(() =>{
    //     return 
    // })









    it('Returns 401 and appropriate json response',() =>{
        return request(server)
        .get('/subscriptions/')
        .expect(401)
        .then(response => expect(response.body).toEqual({error:"Credentials needed"}));
    })
})