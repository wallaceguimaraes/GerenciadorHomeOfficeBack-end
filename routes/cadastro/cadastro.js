var express = require('express');
var router = express.Router();
var conexao  = require('../../src/banco/conexao')

/* GET users listing. */
router.post('/', function(req, res, next) {
  //res.send({message: req.body.login});
  let nome = req.body.nome
  let login = req.body.login
  let senha = req.body.senha
  let empresa = req.body.empresa
  let perfil = 2
  let area = req.body.area
  let cargo = req.body.cargo
  let query ="insert into usuario (nome, login, senha, perfil_id, empresa_id, area_id, cargo) values (?,?,?,?,?,?,?)";

  if(req.body.perfil){
    perfil = req.body.perfil
    }

  conexao.query(
    query,
      [nome, login, senha, perfil, empresa, area, cargo], function (err, row, field){
        if(err){
          console.log(err)
          res.send({'sucess': false, 'message':'Não foi possível se conectar ao banco'})
        }else{
        
          res.send({'sucess': true, 'message': 'Cadastrado com sucesso!' })

        }
   })

});

module.exports = router;
