/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // await knex.raw('TRUNCATE TABLE "videos" CASCADE');
  // await knex('videos').truncate()

  // Deletes ALL existing entries
  // await knex('videos').truncate()
  await knex('videos').del();
  await knex('videos').insert([
    { title: 'video1' , channel_id: 1},
    { title: 'video2' , channel_id: 1},
    { title: 'video3' , channel_id: 2},

  ]);
};
