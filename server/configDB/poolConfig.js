const { Pool } = require('pg');
//-> Estos datos sensibles se  deben guardar en variables de entorno.
//-> al lado de las claves dejo el ejemplo de las propiedades.

const pool = new Pool({
    host: process.env.HOST_DATABASE,                        // 'localhost'
    user: process.env.USER_DATABASE,                        //'postgres'
    password: process.env.PASSWORD_DATABASE,                //'data'
    database: process.env.DATABASE_DATABASE,                //'todoreact'
    port: process.env.PORT_DATABASE                         //'5432'
})



module.exports = pool;