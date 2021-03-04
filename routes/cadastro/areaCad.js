var express = require('express');
var router = express.Router();
var conexao  = require('../../src/banco/conexao')
router.post('/', function(req, res, next) {
  //res.send({message: req.body.login});
  let descricao = req.body.descricao
  let area_id = req.body.area_id
  let ativo = req.body.ativo
  let empresa_id = req.body.empresa_id

  if(area_id===0){
  conexao.query(
    "insert into area (descricao, empresa_id) values (?,?)",
      [descricao, empresa_id], function (err, row, field){
        if(err){
          console.log(err)
          res.send({'sucess': false, 'message':'Não foi possível se conectar ao banco'})
        }

        if(!err){
        
          res.send({'sucess': true, 'message': 'Área cadastrada com sucesso!' })

        }else{
          res.send({'sucess': false, 'message': 'Não cadastrado!' })
          
        }
   })
  }else if(ativo==='NÃO'){


    conexao.query(
      "update area set ativo=? where area_id=?",
        [ativo, area_id], function (err, row, field){
          if(err){
            console.log(err)
            res.send({'sucess': false, 'message':'Não foi possível se conectar ao banco'})
          }
  
          if(!err){
          
            res.send({'sucess': true, 'message': 'Área excluída com sucesso!' })
  
          }else{
            res.send({'sucess': false, 'message': 'Não excluído!' })
            
          }
     })



  }else{

    conexao.query(
      "update area set descricao=? where area_id=?",
        [descricao, area_id], function (err, row, field){
          if(err){
            console.log(err)
            res.send({'sucess': false, 'message':'Não foi possível se conectar ao banco'})
          }
  
          if(!err){
          
            res.send({'sucess': true, 'message': 'Área atualizada com sucesso!' })
  
          }else{
            res.send({'sucess': false, 'message': 'Não atualizado!' })
            
          }
     })
  }

});

module.exports = router;
