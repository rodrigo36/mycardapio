
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'mysql.mycardapio.kinghost.net',
    user: 'mycardapio',
    database: 'mycardapio',
    password: 'Rodrigo2012',
    multipleStatements: true
  });
  
  module.exports = connection;
