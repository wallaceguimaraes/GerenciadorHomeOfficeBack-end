var express = require('express');
var router = express.Router();
var conexao  = require('../../src/banco/conexao')

/* GET users listing. */
router.post('/', function(req, res, next) {
  //res.send({message: req.body.login});
  let empresa = req.body.empresa
  
    conexao.query(
      "insert into empresa (descricao) values (?)",
        [empresa], function (err, row, field){
          if(err){
              res.send({'failed': false, 'message':'Não foi possível se conectar ao banco'})
          }
          else{  
              //res.send({row})
             //sucesso
             conexao.query(
              "select last_insert_id() as id from dual",
                [empresa], function (err, row, field){
                  if(err){
                      res.send({'failed': false, 'message':'Não foi possível se conectar ao banco'})
                  }
                  else{  
                    res.send({'sucess': true, 'id':row[0].id})
                    }
             })      
            }
     })
});

module.exports = router;
