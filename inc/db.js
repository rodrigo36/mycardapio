
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'cardapio',
    password: 'root',
    multipleStatements: true
  });
  
  module.exports = connection;