const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('./models/petcustomers');

const routes = require('./routes/index');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:/petcustomers', {useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

mongoose.set('useCreateIndex', true);

app.use(express.json())

const petcustomersRouter = require('./routes/petcustomers');
app.use('/petcustomers', petcustomersRouter)
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use('/', routes);

// partials directory setup
const hbs = require('hbs');
const bodyParser = require('body-parser');
const morgan = require('morgan');

hbs.registerPartials(__dirname + '/views/partials');

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', petcustomersRouter);

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
