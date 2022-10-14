const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'eduwork-cruds',
})

// console.log(connection)
module.exports = connection;