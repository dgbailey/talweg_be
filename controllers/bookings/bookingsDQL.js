const db = require('../../dbConfig');
const TABLE_NAME = 'booking_fact';

function getAllByUserId(id){
    return db('booking_fact').where('user_id',id);
}

module.exports = {getAllByUserId}