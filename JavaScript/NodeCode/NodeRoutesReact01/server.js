const path = require('path');
const express = require('express');
const app = express();
const favicon = require('serve-favicon');

const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');

// For posts
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 30025;

// Middleware
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
var router = express.Router();
app.use('/', router);

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

    router.get('/', function response(req, res) {
        //res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'public/index.html')));
        //res.end();
        res.sendFile(path.join(__dirname, 'public/index.html'));
    });

} else {
    console.log('Production in server.js');
    app.use(express.static(__dirname + '/dist'));
    router.get('/', function response(req, res) {
        res.sendFile(path.join(__dirname, 'public/index.html'));
    });
}

router.get('/nine', function(request, response) {
    'use strict';
    console.log('nine called');
    response.send({'serverNine': '99'});
});

router.get('/getNine', function(request, response) {
    'use strict';
    console.log('getNine called');
    response.send({ "result": '9' });
});

// With a get, the parameters are passed in request.query
router.get('/add', function(request, response) {
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
router.post('/add', function(request, response) {
    'use strict';
    console.log('add post called');
    console.log(request.body);
    var result = parseInt(request.body.operandA) + parseInt(request.body.operandB);
    response.send({
        "result": result
    });
});

app.use("/", express.static(__dirname + '/public'));

app.listen(port);
console.log('Listening on port :' + port);
