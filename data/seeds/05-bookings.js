const d1 = new Date();
let d2 = new Date(new Date().setDate(d1.getDate() + 1));
const d3 = new Date();
let d4 = new Date(new Date().setDate(d1.getDate() + 1));
const d5 = new Date();
let d6 = new Date(new Date().setDate(d1.getDate() + 6));


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('booking_fact').del()
    .then(function () {
      // Inserts seed entries
      return knex('booking_fact').insert([
        {start_date: d1,end_date:d2,expired:false,user_id:1,subscription_id:2},
        {start_date: d1,end_date:d2,expired:false,user_id:2,subscription_id:3},
        {start_date: d3,end_date:d4,expired:false,user_id:3,subscription_id:3},
        {start_date: d3,end_date:d4,expired:false,user_id:5,subscription_id:2},
        {start_date: d5,end_date:d6,expired:false,user_id:6,subscription_id:1},
        
      ]);
    });
};
