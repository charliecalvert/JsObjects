const express = require('express');
const serveStatic = require('serve-static');

const port = 30025;
const app = express();
app.use(serveStatic('public', {'index': ['index.html', 'index.htm']}));

app.listen(port, function() {
    console.log('running on port:', port)
});

