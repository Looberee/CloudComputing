var pg_conn = require('./pgConfig');
const session = require('express-session');


async function display_products(shop_id) {

    // query global variable
    var products_query;

    if (shop_id == 4) {
        products_query = "SELECT * FROM products";
    }
    else {
        products_query = {
            text: "SELECT * FROM products WHERE shop_id = $1",
            values: [shop_id]
        }
    }

    const data = await pg_conn.query(products_query);

    let table_string = `
    <style>
        table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
        }
        .insert-button {
        background-color: #4dff00;
        }
            .button-5 {
              align-items: center;
              background-clip: padding-box;
              background-color: #fa6400;
              border: 1px solid transparent;
              border-radius: .25rem;
              box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
              box-sizing: border-box;
              color: #fff;
              cursor: pointer;
              display: inline-flex;
              font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
              font-size: 16px;
              font-weight: 600;
              justify-content: center;
              line-height: 1.25;
              margin: 0;
              min-height: 3rem;
              padding: calc(.875rem - 1px) calc(1.5rem - 1px);
              position: relative;
              text-decoration: none;
              transition: all 250ms;
              user-select: none;
              -webkit-user-select: none;
              touch-action: manipulation;
              vertical-align: baseline;
              width: auto;
            }
            
            .button-5:hover,
            .button-5:focus {
              background-color: #fb8332;
              box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
            }
            
            .button-5:hover {
              transform: translateY(-1px);
            }
            
            .button-5:active {
              background-color: #c85000;
              box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
              transform: translateY(0);
            }
            .button-6 {
                align-items: center;
                background-clip: padding-box;
                background-color: #DC143C;
                border: 1px solid transparent;
                border-radius: .25rem;
                box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
                box-sizing: border-box;
                color: #fff;
                cursor: pointer;
                display: inline-flex;
                font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
                font-size: 16px;
                font-weight: 600;
                justify-content: center;
                line-height: 1.25;
                margin: 0;
                min-height: 3rem;
                padding: calc(.875rem - 1px) calc(1.5rem - 1px);
                position: relative;
                text-decoration: none;
                transition: all 250ms;
                user-select: none;
                -webkit-user-select: none;
                touch-action: manipulation;
                vertical-align: baseline;
                width: auto;
              }
              
              .button-6:hover,
              .button-6:focus {
                background-color: #B22222;
                box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
              }
              
              .button-6:hover {
                transform: translateY(-1px);
              }
              
              .button-6:active {
                background-color: #FF0000;
                box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
                transform: translateY(0);
              }
              .button-7 {
                align-items: center;
                background-clip: padding-box;
                background-color: #7FFFD4;
                border: 1px solid transparent;
                border-radius: .25rem;
                box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
                box-sizing: border-box;
                color: #fff;
                cursor: pointer;
                display: inline-flex;
                font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
                font-size: 16px;
                font-weight: 600;
                justify-content: center;
                line-height: 1.25;
                margin: 0;
                min-height: 3rem;
                padding: calc(.875rem - 1px) calc(1.5rem - 1px);
                position: relative;
                text-decoration: none;
                transition: all 250ms;
                user-select: none;
                -webkit-user-select: none;
                touch-action: manipulation;
                vertical-align: baseline;
                width: auto;
              }
              
              .button-7:hover,
              .button-7:focus {
                background-color: #5F9EA0;
                box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
              }
              
              .button-7:hover {
                transform: translateY(-1px);
              }
              
              .button-7:active {
                background-color: #088F8F;
                box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
                transform: translateY(0);
              }
        td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
        }
        tr:nth-child(even) {
        background-color: #B2BEB5;
        }
        input
        {
            outline : none;
        }
        .button-8 {
            align-items: center;
            background-clip: padding-box;
            background-color: #6495ED;
            border: 1px solid transparent;
            border-radius: .25rem;
            box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
            box-sizing: border-box;
            color: #fff;
            cursor: pointer;
            display: inline-flex;
            font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
            font-size: 16px;
            font-weight: 600;
            justify-content: center;
            line-height: 1.25;
            margin: 0;
            min-height: 3rem;
            padding: calc(.875rem - 1px) calc(1.5rem - 1px);
            position: relative;
            text-decoration: none;
            transition: all 250ms;
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
            vertical-align: baseline;
            width: auto;
          }
          
          .button-8:hover,
          .button-8:focus {
            background-color: #0096FF;
            box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
          }
          
          .button-8:hover {
            transform: translateY(-1px);
          }
          
          .button-8:active {
            background-color: #0047AB;
            box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
            transform: translateY(0);
          }
        </style>
        </head>
        <body>
        <h2>Table products</h2>
        <table>
    <tr>`;
    //--- display all header of table
    let num_fields = data.fields.length;
    for (let i = 0; i < num_fields; i++) {
        table_string += `<td>${data.fields[i].name}</td>`;
    }
    


        table_string += `<th>Actions</th>`;
        table_string += `</tr>`;



    //--- display all rows of table 
    let num_rows = data.rows.length;
    for (let i = 0; i < num_rows; i++) {
        table_string += `
        <form action="/users/crud" method="post">
            <tr>`;
        for (let j = 0; j < num_fields; j++) {
            let field_name = data.fields[j].name;
            let cell = data.rows[i][field_name];
            table_string += `<td><input type='text' name=${field_name} value=${cell}></td>`;
        }


        // add buttons if there is not admin role

            table_string += `<td>
                <button type="submit" name='crud' class="button-5" value='update'>Update</button>
                <button type="submit" name='crud' class="button-6" value='delete'>Delete</button>
            </td>`;
            table_string += `</tr></form>`;

    
    }

    // add form submit for insert
    
    table_string += `<form action="/users/crud" method="post"><tr>`
    for (let j = 0; j < num_fields; j++) {
        let field_name = data.fields[j].name;
        table_string += `<td><input type='text' name=${field_name}></td>`;
    }


        table_string += `<td>
            <button type="submit" name='crud' class="button-7" value='insert'>Insert</button>
        </td>`;

    // close form and table
    table_string += `</tr></form>`;

    table_string += `</table>`;
    // console.log(data);
    return table_string;
}

// export tables
module.exports = display_products;