const knex = require("knex");

const kenxconfig = require("../knexfile.js");

module.exports = knex(kenxconfig.development);
