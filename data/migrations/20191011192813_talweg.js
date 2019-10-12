
exports.up = function(knex) {
    return knex.schema
    .createTable('users_dim',function(usersDim){
        usersDim.increments()
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        usersDim
            .string('username','225')
            .notNullable()
            .unique();
        usersDim
            .string('password')
            .notNullable();
       
    })
    .createTable('service_providers',function(tbl){
        tbl.increments()
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        tbl
            .string('company_name')
            .notNullable()
            .unique();
    })

    .createTable('service',function(tbl){
        tbl.increments()
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        tbl
            .string('service_name')
            .notNullable()
            .unique();
        tbl
            .integer('service_provider_id')
            .unsigned()
            .references('id')
            .inTable('service_providers')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })

    .createTable('subscription_dim',function(tbl){
        tbl.increments()
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        tbl
            .boolean('bookable_auth')
            .defaultTo(false);
        tbl
            .integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users_dim')
            

        tbl
            .integer('service_id')
            .notNullable()
            .references('id')
            .inTable('service')
            

        tbl.unique(['user_id','service_id']);


    })

    .createTable('booking_fact',function(tbl){
        tbl.increments();
        tbl
            .datetime('start_date')
            .notNullable();
        tbl
            .datetime('end_date')
            .notNullable();

        tbl
            .boolean('expired')
            .notNullable()
        
        tbl
            .integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users_dim')
           
        
        tbl
            .integer('subscription_id')
            .notNullable()
            .references('id')
            .inTable('subscription_dim')
          

        tbl.unique(['user_id','subscription_id']);

    })
};

exports.down = function(knex) {
  
    knex.schema.dropTableIfExists('users_dim').dropTableIfExists('service_providers')
    .dropTableIfExists('service').dropTableIfExists('subscription_dim').dropTableIfExists('booking_fact');


};
