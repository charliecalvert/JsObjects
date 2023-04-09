const express = require('express');
var path = require('path');
const app = express();
const port = 30025;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.get('/get-nine-from-server', (request, response) => {
    response.send({'result': 'success', 'nine': 9});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
