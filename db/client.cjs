require('dotenv').config();
const { Client } = require('pg');
const client = new Client(process.env.DATABASE_URL || 'postgres://localhost:5432/the_bagel_shop');

module.exports = client;