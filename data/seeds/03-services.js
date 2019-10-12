
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('service').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('service').insert([
        {service_name: 'Prime Video','service_provider_id':1},
        {service_name: 'Netflix','service_provider_id':2},
        {service_name: 'Hulu','service_provider_id':3}
      ]);
    });
};
