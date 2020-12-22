var createError = require('http-errors');
var express = require('express');
var http = require('http');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));
var router = express.Router();

router.get('/', (req, res, next) => {
  res.end('hello');
});

router.get('/redirect-me', (req, res, next) => {
  res.statusCode = 301;
  res.end('redirected');
});

router.get('/bad-news-bears', (req, res, next) => {
  next(createError(500));
});

app.use('/', router);

// catch 404 and forward to error handler
app.use((req, res, next) => next(createError(404)));

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = err;
  res.status(err.status || 500);
  res.end();
});

// start server
var port = process.env.PORT || '3000';
app.set('port', port);

http.createServer(app).listen(port, () => {
  console.log(`listening on port: ${port}`)
})
.on('error', (err) => {
  console.error(err);
  process.exit(1);
});