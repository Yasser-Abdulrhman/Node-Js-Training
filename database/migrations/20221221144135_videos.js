/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('videos' , (table) =>{
        table.increments();
        table.string('title').notNullable();
        table.integer('channel_id').unsigned();
        // table.foreign('channel_id').references('channels.id');
        table.foreign('channel_id').references('id').inTable('channels').onDelete('CASCADE').onUpdate('RESTRICT')

        table.timestamps(true , true);
        
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('videos')
  
};
