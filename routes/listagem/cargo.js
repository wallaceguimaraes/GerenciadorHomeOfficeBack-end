var express = require('express');
var router = express.Router();
var conexao  = require('../../src/banco/conexao')
const app = require('../../app');
const App = express()

App.use(express.json())/* GET users listing. */
router.post('/', function(req, res, next) {

  let ativo = req.body.ativo
  let empresa_id = req.body.empresa_id
  let area_id = req.body.area_id
  conexao.query(
    "select c.descricao, c.cargo_id, a.descricao as descricao_area from cargo c inner join area a on a.area_id=c.area_id inner join empresa e on e.empresa_id=a.empresa_id where e.empresa_id = ? and c.ativo = ? and c.area_id order by c.descricao asc",
      [empresa_id, ativo, area_id], function (err, row, field){
        if(err){
            res.send({'failed': false, 'message':'Não foi possível se conectar ao banco'})
        }
        else{  
            res.send({row})
        }
   })

});
module.exports = router;
