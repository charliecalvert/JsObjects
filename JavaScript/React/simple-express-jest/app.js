// app.js
const express = require('express');

const app = express();

const port = process.env.PORT || 30025;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = app;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
