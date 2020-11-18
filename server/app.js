var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

// load Router
var indexRouter = require('./routes/index');
var taskRouter = require('./routes/tasks');
var imageRouter = require('./routes/images');

// load Sockets
var chatSocket = require('./sockets/chats');

var app = express();
app.io = require('socket.io')();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// set Router
app.use('/', indexRouter);
app.use('/tasks', taskRouter);
app.use('/images', imageRouter);
app.use('/public', express.static('public'))

// plug Socket
chatSocket(app.io.of('/chats'));

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

module.exports = app;
