/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex("users").insert([
    { id: 1, name: "Kinza", email: "kinza@aceon.com" },
    { id: 2, name: "shanza", email: "shanza@google.com" },
    { id: 3, name: "john", email: "jon@googke.com" },
  ]);
};
