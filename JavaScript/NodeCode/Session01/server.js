var createError = require('http-errors');
var express = require('express');
var path = require('path');
var app = express();
var favicon = require('serve-favicon');
var session = require('express-session');
var cookieParser = require('cookie-parser');

var port = process.env.PORT || 30025;
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.set('view engine', 'pug');

app.use(cookieParser());

var indexRouter = require('./routes/index');
app.use(express.static(path.join(__dirname, 'public')));

const uuid = require('uuid');

app.use(
    session({
        genid: () => {
            return uuid.v4(); // use UUIDs for session.pug IDs
        },
        secret: process.env.SESSION_SECRET || 'keyboard cat',
        resave: true,
        saveUninitialized: true
    })
);

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(port, () => console.log('Session01 listening on port', port + '.'));
