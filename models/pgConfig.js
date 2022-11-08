const Pool = require('pg').Pool;
const pg_conn = new Pool(
    {
        user: 'imhlguqqfqirsu',
        host: 'ec2-3-214-57-29.compute-1.amazonaws.com',
        database: 'd4o20th481sq28',
        password: 'e9c7984a341a1972727972a98d39f9853d035e94e2500a7c33904c2cbacfe0e9',
        port: 5432,
        ssl: {
            rejectUnauthorized: false,
        },
    }
);
module.exports = pg_conn;