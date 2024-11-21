const { Pool } = require('pg');  // For PostgreSQL connection


// PostgreSQL pool setup
const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "m@n@$v!",
    database: "hr_portal"

});

module.exports = pool;
