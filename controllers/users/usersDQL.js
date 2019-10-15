const db = require('../../dbConfig');
const TABLE_NAME = 'users_dim';

function insert(user){
    return db(TABLE_NAME).insert(user,['username','id']);
}

function getByUsername(username){
    return db(TABLE_NAME).where('username',username);
}

module.exports = {insert,getByUsername};