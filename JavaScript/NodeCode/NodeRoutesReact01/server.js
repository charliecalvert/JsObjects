const path = require('path');
const express = require('express');
const app = express();
const fs = require('fs');

const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');

// For posts
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? process.env.PORT : 30025;

if (isDeveloping) {
    console.log('developing in server.js');
    const compiler = webpack(config);
    const middleware = webpackMiddleware(compiler, {
        publicPath: config.output.publicPath,
        contentBase: '.',
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
        //res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'public/index.html')));
        //res.end();
        res.sendFile(path.join(__dirname, 'public/index.html'));
    });

} else {
    console.log('Production in server.js');
    app.use(express.static(__dirname + '/dist'));
    app.get('/', function response(req, res) {
        res.sendFile(path.join(__dirname, 'public/index.html'));
    });
}

app.get('/nine', function(request, response) {
    'use strict';
    console.log('nine called');
    response.send({'serverNine': '99'});
});

// Middleware
/*
var router = express.Router();
app.use('/', router);
*/

app.get('/getNine', function(request, response) {
    'use strict';
    console.log('getNine called');
    response.send({ "result": '9' });
});

// With a get, the parameters are passed in request.query
app.get('/add', function(request, response) {
    'use strict';
    console.log('add get called');
    console.log(request.query);
    // var result = parseInt(request.query.operandA) + parseInt(request.query.operandB);
    response.send({
        "result": parseInt(request.query.operandA) + parseInt(request.query.operandB)
    });
});

/* To handle a post, we have to add bodyParser, shown above
   Now our parameters come in request.body */
app.post('/add', function(request, response) {
    'use strict';
    console.log('add post called');
    console.log(request.body);
    var result = parseInt(request.body.operandA) + parseInt(request.body.operandB);
    response.send({
        "result": result
    });
});

/*
router.get('/', function(request, response) {
    'use strict';
    var html = fs.readFileSync(__dirname + '/public/index.html');
    response.writeHeader(200, {
        "Content-Type": "text/html"
    });
    response.write(html);
    response.end();
});
*/

app.use("/", express.static(__dirname + '/public'));

// var port = process.env.PORT || 30025;
app.listen(port);
console.log('Listening on port :' + port);
