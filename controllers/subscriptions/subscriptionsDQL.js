const db = require('../../dbConfig');
const TABLE_NAME = 'subscription_dim';


function getAll(){
    
    return db(TABLE_NAME)};


function getAllByUserId(userId){

    return db.select('*').from(TABLE_NAME).where('user_id',userId).rightJoin('service','service.service_id',TABLE_NAME + '.service_id');

    
}

function insert(body){
    console.log(body)
    return db(TABLE_NAME).insert(body,['bookable_auth','user_id','service_id']);
}

function deleteById(subId){
    return db(TABLE_NAME).where('id',subId).del()
}

function updateById(subId,body){
    return db(TABLE_NAME).where('id',subId).update(body,['bookable_auth','service_id','user_id']);
}

    module.exports = {getAll,getAllByUserId,insert,deleteById,updateById}


