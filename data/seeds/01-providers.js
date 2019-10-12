
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('service_providers').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('service_providers').insert([
        {company_name: 'Amazon'},
        {company_name: 'Netflix'},
        {company_name: 'Hulu'}
      ]);
    });
};
