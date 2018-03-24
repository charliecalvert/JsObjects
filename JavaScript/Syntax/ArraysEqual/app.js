const express = require('express');
const serveStatic = require('serve-static');

const port = 30025;
const app = express();
app.use(serveStatic('public', {'index': ['index.html', 'index.htm']}));
app.use("/scripts", express.static(__dirname + '/node_modules/jquery/dist/'));
app.listen(port, function() { 'use strict';
    console.log('running on port:', port);
});

