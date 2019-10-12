// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    connection: {
      filename: './dev.sqlite3'
    },
    
    
  },

  pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done);
    },
  },

  

};



