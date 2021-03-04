var express = require('express');
var router = express.Router();
var conexao  = require('../../src/banco/conexao')
router.post('/', function(req, res, next) {
  //res.send({message: req.body.login});
  let tipo_id = req.body.tipo_id   
  let descricao = req.body.descricao
  let area_id = req.body.area_id
  let ativo = req.body.ativo
  let projeto_id = req.body.projeto_id
  let empresa_id = req.body.empresa_id

  if(projeto_id===0){
  conexao.query(
    "insert into projeto (descricao, area_id, tipo_id, empresa_id) values (?,?,?,?)",
      [descricao, area_id, tipo_id, empresa_id], function (err, row, field){
        if(err){
          console.log(err)
          res.send({'sucess': false, 'message':'Não foi possível se conectar ao banco'})
        }

        if(!err){
        
          res.send({'sucess': true, 'message': 'Projeto cadastrado com sucesso!' })

        }else{
          res.send({'sucess': false, 'message': 'Não cadastrado!' })
          
        }
   })
  }else if(ativo==='NÃO'){
    conexao.query(
      "update projeto set ativo=? where projeto_id=?",
        [ativo, projeto_id], function (err, row, field){
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
      "update projeto set descricao=?, area_id = ?, tipo_id = ? where projeto_id=?",
        [descricao, area_id, tipo_id, projeto_id], function (err, row, field){
          if(err){
            console.log(err)
            res.send({'sucess': false, 'message':'Não foi possível se conectar ao banco'})
          }
  
          if(!err){
          
            res.send({'sucess': true, 'message': 'Projeto atualizado com sucesso!' })
  
          }else{
            res.send({'sucess': false, 'message': 'Não atualizado!' })
            
          }
     })
  }

});

module.exports = router;
