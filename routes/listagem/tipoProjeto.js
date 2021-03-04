var express = require('express');
var router = express.Router();
var conexao  = require('../../src/banco/conexao')

const app = require('../../app');
const App = express()

App.use(express.json())/* GET users listing. */
router.post('/', function(req, res, next) {
  //res.send({message: req.body.login});

  let ativo = req.body.ativo
 // let dados =[]
//  let tipo = new Object()

  conexao.query(
    "select * from tipo_projeto where ativo = ? order by descricao asc",
      [ativo], function (err, row, field){
        if(err){
         

            res.send({'failed': false, 'message':'Não foi possível se conectar ao banco'})
        }
        else{  
            res.send({row})

        }
   })

});

module.exports = router;
