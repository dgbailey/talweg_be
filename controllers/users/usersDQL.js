const db = require('../../dbConfig');
const TABLE_NAME = 'users_dim';

function insert(user){
    return db(TABLE_NAME).insert(user,['username','id']);
}

function getByUsername(username){
    return db(TABLE_NAME).where('username',username);
}

function deleteByUsername(username){
    return db(TABLE_NAME).where('username',username).del();
}
module.exports = {insert,getByUsername,deleteByUsername};