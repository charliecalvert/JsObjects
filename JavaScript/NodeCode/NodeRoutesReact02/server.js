/* eslint no-console: 0 */

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? process.env.PORT : 30024;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (isDeveloping) {
    console.log('developing in server.js');
    const compiler = webpack(config);
    const middleware = webpackMiddleware(compiler, {
        publicPath: config.output.publicPath,
        contentBase: 'source',
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
    });

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));

    app.get('/', function response(req, res) {
        res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'public/index.html')));
        res.end();
    });

} else {
    console.log('Production in server.js');
    app.use(express.static(__dirname + '/dist'));
    app.get('/', function response(req, res) {
        res.sendFile(path.join(__dirname, 'dist/index.html'));
    });
}

app.get('/nine', function(request, response) {
    console.log('getNine called');
    response.send({'serverNine': '99'});
});

app.get('/add', function(request, response) {
    'use strict';
    console.log('add get called');
    console.log(request.query);
    var operandA = parseInt(request.query.operandA);
    var operandB = parseInt(request.query.operandB);
    var result = operandA + operandB;
    response.send({
        'addResult': result
    });
});

/* To handle a post, we have to add express.bodyParser, shown above
 Now our parameters come in on request.body */
app.post('/add-json', function(request, response) {
    'use strict';
    console.log('add post called');
    console.log(request.body);
    var operandA = parseInt(request.body.operandA);
    var operandB = parseInt(request.body.operandB);
    var result = operandA + operandB;
    response.send({
        'addResultPost': result
    });
});

app.listen(port, '0.0.0.0', function onStart(err) {
    if (err) {
        console.log(err);
    }
    console.info('==> 🌎 Listening on port %s. Open http://localhost:%s/', port, port);
});

/*var express = require('express');
 var app = express();

 // For posts
 var bodyParser = require('body-parser');
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: false }));

 // Middleware. First getter the router from index.js
 var router = require('./routes/index');
 // Then tell express about our middleware
 app.use('/', router);

 app.use('/', express.static(__dirname + '/public'));

 module.exports = app;
 */
