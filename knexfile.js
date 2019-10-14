// Update with your config settings.

module.exports = {

  development: {

      client: 'pg',
      connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'postgres',
        database: 'talweg_be'
      },
      // searchPath: ['knex', 'public'],
    // searchPath: ['knex', 'public'],
    // client: 'sqlite3',
    // useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    // connection: {
    //   filename: './dev.sqlite3'
    // },
    
    
  },

  // pool: {
  //   afterCreate: (conn, done) => {
  //     conn.run('PRAGMA foreign_keys = ON', done);
  //   },
  // },

  

};



