/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // await knex.raw('TRUNCATE TABLE "channels" CASCADE'); 
//  await knex('channels').truncate()
  // Deletes ALL existing entries
  await knex('channels').del();
  await knex('channels').insert([
    { name: 'channel1'},
    { name: 'channel12'},
    { name: 'channel13'}
  ]);
};
