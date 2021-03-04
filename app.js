var createError = require('http-errors');

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');

var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth/autenticacao');
var tipoRouter = require('./routes/listagem/tipoProjeto');
var tipoCadRouter = require('./routes/cadastro/tipoCadProjeto');
var usersRouter = require('./routes/users');
var empRouter = require('./routes/cadastro/empresa');
var cadastroRouter = require('./routes/cadastro/cadastro');
var areaCadRouter = require('./routes/cadastro/areaCad');
var areaRouter = require('./routes/listagem/area');
var cargoCadRouter = require('./routes/cadastro/cargoCad');
var cargoRouter = require('./routes/listagem/cargo');
var projetoCadRouter = require('./routes/cadastro/projetoCad');
var projetoRouter = require('./routes/listagem/projeto');


var cors = require('cors')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/autenticacao', authRouter);
app.use('/tipoProjeto', tipoRouter);
app.use('/tipoCadProjeto', tipoCadRouter);
app.use('/areaCad', areaCadRouter);
app.use('/area', areaRouter);
app.use('/cargoCad', cargoCadRouter);
app.use('/cargo', cargoRouter);
app.use('/users', usersRouter);
app.use('/empresa', empRouter);
app.use('/cadastro', cadastroRouter);
app.use('/projeto', projetoRouter);
app.use('/projetoCad', projetoCadRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/*
var port = process.env.PORT || 3000;
app.listen(port, function () {
    //console.log('Umbler listening on port %s', port);
});
*/

module.exports = app;
