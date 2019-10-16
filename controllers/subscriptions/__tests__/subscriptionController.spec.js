
const request = require('supertest');
const {s:server} = require('../../../server');
const {deleteByUsername} = require('../../users/usersDQL');

let username = 'getToken';
let credentials = {'username':username,'password':'test'};
var token;
beforeAll(() =>{
   
    return request(server)
    .post('/users/register')
    .send(credentials)
    .expect('Content-Type', /json/)
    .expect(200)
    .then(response => {token = response.body.token})
    
}) 


afterAll(() => {
 
    //delete test user to avoid unique username constraing
    let username = 'getToken';
    return deleteByUsername(username);
})

//start tests

describe('Tests for token protection',() =>{
    it('Returns 401 and appropriate json response',() =>{
        return request(server)
        .get('/subscriptions/')
        .expect(401)
        .then(response => expect(response.body).toEqual({error:"Credentials needed"}));
    })

    it('Returns 200 and 3 json subscriptions using valid JWT',() =>{
        return request(server)
        .get('/subscriptions')
        .set('Authorization',token)
        
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body.length).toBe(3);

        })
            
    })
})




