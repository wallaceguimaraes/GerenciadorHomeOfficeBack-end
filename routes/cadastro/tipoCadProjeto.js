var express = require('express');
var router = express.Router();
var conexao  = require('../../src/banco/conexao')


/* GET users listing. */
router.post('/', function(req, res, next) {
  //res.send({message: req.body.login});
  let descricao = req.body.descricao
  let tipo_id = req.body.tipo_id
  let ativo = req.body.ativo
  //let login = req.body.login
  //let senha = req.body.senha

  if(tipo_id===0){

  conexao.query(
    "insert into tipo_projeto (descricao) values (?)",
      [descricao], function (err, row, field){
        if(err){
          console.log(err)
          res.send({'sucess': false, 'message':'Não foi possível se conectar ao banco'})
        }

        if(!err){
        
          res.send({'sucess': true, 'message': 'Tipo de projeto cadastrado com sucesso!' })

        }else{
          res.send({'sucess': false, 'message': 'Não cadastrado!' })
          
        }
   })
  }else if(ativo==='NÃO'){


    conexao.query(
      "update tipo_projeto set ativo=? where tipo_projeto_id=?",
        [ativo, tipo_id], function (err, row, field){
          if(err){
            console.log(err)
            res.send({'sucess': false, 'message':'Não foi possível se conectar ao banco'})
          }
  
          if(!err){
          
            res.send({'sucess': true, 'message': 'Tipo de projeto excluído com sucesso!' })
  
          }else{
            res.send({'sucess': false, 'message': 'Não excluído!' })
            
          }
     })



  }else{

    conexao.query(
      "update tipo_projeto set descricao=? where tipo_projeto_id=?",
        [descricao, tipo_id], function (err, row, field){
          if(err){
            console.log(err)
            res.send({'sucess': false, 'message':'Não foi possível se conectar ao banco'})
          }
  
          if(!err){
          
            res.send({'sucess': true, 'message': 'Tipo de projeto atualizado com sucesso!' })
  
          }else{
            res.send({'sucess': false, 'message': 'Não atualizado!' })
            
          }
     })
    







  }

});

module.exports = router;
