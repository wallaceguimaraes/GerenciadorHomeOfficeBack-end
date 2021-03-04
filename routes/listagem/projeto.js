var express = require('express');
var router = express.Router();
var conexao  = require('../../src/banco/conexao')
const app = require('../../app');
const App = express()

App.use(express.json())/* GET users listing. */
router.post('/', function(req, res, next) {

  let ativo = req.body.ativo
  //let area_id = req.body.area_id
  //let tipo_id = req.body.area_id
  let empresa_id = req.body.empresa_id
  
  conexao.query(
    "select distinct(p.projeto_id),p.descricao, p.inicio, p.fim, p.situacao,a.descricao as descricao_area, t.descricao as descricao_tipo from projeto p inner join tipo_projeto t on t.tipo_projeto_id=p.tipo_id inner join empresa e on e.empresa_id=p.empresa_id inner join area a on a.area_id=p.area_id  where e.empresa_id = ? and p.ativo = ? order by p.descricao asc",
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
