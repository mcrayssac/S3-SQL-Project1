const Pool = require("pg").Pool;

const pool = new Pool({
    user: 'max',
    host: 'localhost',
    password: 'max',
    database: 'projet1',
    port: 5432
});

module.exports = pool;