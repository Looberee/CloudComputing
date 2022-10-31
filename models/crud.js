var pg_conn = require('./pgConfig');

async function crud(req_body) {
    let id = req_body.id;
    let product_name = req_body.name;
    let price = req_body.price;
    let shop_id = req_body.shop_id;

    // update case
    if (req_body.crud == 'update') {
        var query = {
            text: `UPDATE products
                SET name = $2,
                price = $3
                WHERE id = $1;`,
            values: [id, product_name, price]
        }
           
    }
    // delete case
    else if (req_body.crud == 'delete') { 
        var query = {
            text: `DELETE FROM products WHERE id = $1;`,
            values: [id]
        }
    }
    // insert case
    else {
        var query = {
            text: `INSERT INTO products
                (id, name, shop_id, price)
                VALUES ($1, $2, $3, $4);`,
            values: [id, product_name, shop_id, price]
        }
    }

    // then query to db
    console.log(query);
    results = await pg_conn.query(query);
}


module.exports = crud;