var express = require('express');
var router = express.Router();
var conexao  = require('../../src/banco/conexao')
router.post('/', function(req, res, next) {
  //res.send({message: req.body.login});
  let descricao = req.body.descricao
  let area_id = req.body.area_id
  let ativo = req.body.ativo
  let cargo_id = req.body.cargo_id

  if(cargo_id===0){
  conexao.query(
    "insert into cargo (descricao, area_id) values (?,?)",
      [descricao, area_id], function (err, row, field){
        if(err){
          console.log(err)
          res.send({'sucess': false, 'message':'Não foi possível se conectar ao banco'})
        }

        if(!err){
        
          res.send({'sucess': true, 'message': 'Cargo cadastrado com sucesso!' })

        }else{
          res.send({'sucess': false, 'message': 'Não cadastrado!' })
          
        }
   })
  }else if(ativo==='NÃO'){


    conexao.query(
      "update cargo set ativo=? where cargo_id=?",
        [ativo, cargo_id], function (err, row, field){
          if(err){
            console.log(err)
            res.send({'sucess': false, 'message':'Não foi possível se conectar ao banco'})
          }
  
          if(!err){
          
            res.send({'sucess': true, 'message': 'Cargo excluído com sucesso!' })
  
          }else{
            res.send({'sucess': false, 'message': 'Não excluído!' })
            
          }
     })



  }else{

    conexao.query(
      "update cargo set descricao=?, area_id = ? where cargo_id=?",
        [descricao, area_id, cargo_id], function (err, row, field){
          if(err){
            console.log(err)
            res.send({'sucess': false, 'message':'Não foi possível se conectar ao banco'})
          }
  
          if(!err){
          
            res.send({'sucess': true, 'message': 'Cargo atualizado com sucesso!' })
  
          }else{
            res.send({'sucess': false, 'message': 'Não atualizado!' })
            
          }
     })
  }

});

module.exports = router;
