
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('subscription_dim').del()
    .then(function () {
      // Inserts seed entries
      return knex('subscription_dim').insert([
        {bookable_auth:false,user_id:1,service_id:1},
        {bookable_auth:false,user_id:2,service_id:3},
        {bookable_auth:false,user_id:3,service_id:1}
      ]);
    });
};
