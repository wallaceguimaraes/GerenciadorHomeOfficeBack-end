var mysql = require('mysql');
var conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'projeto'
  })

  module.exports = conexao