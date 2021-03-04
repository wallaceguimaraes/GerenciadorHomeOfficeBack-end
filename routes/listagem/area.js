var express = require('express');
var router = express.Router();
var conexao  = require('../../src/banco/conexao')
const app = require('../../app');
const App = express()

App.use(express.json())/* GET users listing. */
router.post('/', function(req, res, next) {

  let ativo = req.body.ativo
  let empresa_id = req.body.empresa_id
  conexao.query(
    "select * from area where empresa_id = ? and ativo = ? order by descricao asc",
      [empresa_id, ativo], function (err, row, field){
        if(err){
            res.send({'failed': false, 'message':'Não foi possível se conectar ao banco'})
        }
        else{  
            res.send({row})
        }
   })

});
module.exports = router;
