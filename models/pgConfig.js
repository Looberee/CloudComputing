const Pool = require('pg').Pool;
const pg_conn = new Pool(
    {
        user: 'ysddllwgnngjuk',
        host: 'ec2-18-208-55-135.compute-1.amazonaws.com',
        database: 'd81scnvauds0n4',
        password: '2573b133c105d26c8e42f6325104fa42001e7a10de80d3f22c398698af7ccddc',
        port: 5432,
        ssl: {
            rejectUnauthorized: false,
        },
    }
);
module.exports = pg_conn;