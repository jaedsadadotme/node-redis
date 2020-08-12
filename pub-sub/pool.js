'use strict'
const { Pool } = require('pg');
const databaseConfig = { connectionString: "postgres://<username>:<password>@localhost:5432/<db>" };
const pool = new Pool(databaseConfig);

module.exports = pool;