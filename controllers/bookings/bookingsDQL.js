const db = require('../../dbConfig');
const TABLE_NAME = 'booking_fact';

function getAllByUserId(id){
    return db(TABLE_NAME).where('user_id',id);
}

function getAllToday(){
    return db.raw(`SELECT * FROM subscription_dim sd WHERE NOT EXISTS(SELECT * FROM booking_fact bf WHERE sd.id = bf.subscription_id
        AND (now() + INTERVAL'3 DAY' between start_date and end_date or now() + INTERVAL '4 DAY' between start_date and end_date));`)

  
}



module.exports = {getAllByUserId,getAllToday}