/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries

  // await knex.raw('TRUNCATE TABLE "users" CASCADE');
//  await knex('users').truncate()

  // await knex('users').truncate()
  await knex('users').del();
  await knex('users').insert([
    { name: 'user1' , email: 'user1@gmail.com' , channel_id: 1},
    { name: 'user2' , email: 'user2@gmail.com' , channel_id: 2},
    { name: 'user3' , email: 'user3@gmail.com' , channel_id: 3},
   
  ]);
};
