const knex = require('knex');
const knexfile = ('./knexfile.js');

const db = knex(knexfile.development);

module.exports = db;