var express = require('express');
var router = express.Router();

var mysql = require('mysql');

/*
var conexao = mysql.createConnection({
  host: 'us-cdbr-east-02.cleardb.com',
  user: 'b613ffcb7a149f',
  password: '7d08e801',
  database: 'heroku_9d89a4743e37da9'
})

let ativo = 'SIM'
//let variavel = []

conexao.query(
"select * from usuario where ativo = ?",
    [ ativo], function (err, row, field){
      if(err){
          res.send({'failed': false, 'message':'Não foi possível se conectar ao banco'})
      }
      else{  
          alert(JSON.stringify({row}))
          //alert(JSON.stringify(row))
        }
 })
*/

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
