const faker = require('faker');


const desiredFakes = '100';
const fakesContainer = [];
const create = () =>({
  'username':faker.internet.email(),
  'password':faker.random.uuid()
})
for(let i = 0; i < desiredFakes; i ++){
  let fake = create();
  fakesContainer.push(fake)
}

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users_dim').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users_dim').insert(fakesContainer);
    });
};
