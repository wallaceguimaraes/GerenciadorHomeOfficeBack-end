var express = require('express');
var router = express.Router();
var conexao  = require('../src/banco/conexao')




/* GET users listing. */
router.post('/', function(req, res, next) {
  //res.send({message: req.body.login});
  let login = req.body.login
  let senha = req.body.senha

  conexao.query(
    "select * from usuario where login = ? and senha = ? and ativo = 'SIM'",
      [login, senha], function (err, row, field){
        if(err){
          console.log(err)
          res.send({'sucess': false, 'message':'Não foi possível se conectar ao banco'})
        }
        
        if(row.length >0){
          res.send({'sucess': true, 'usuario': row[0].login})
        }else{
          res.send({'sucess': false, 'message': 'Usuário não encontrado!' })

        }
   })

});

module.exports = router;
