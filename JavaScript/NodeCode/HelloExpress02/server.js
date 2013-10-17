var express = require('express');
var app = express();
var fs = require('fs');

var port = process.env.PORT || 30025;

// app.param('id', /^\d+$/);

app.param('user', function(req, res, next, id){
  console.log("User called: " + next + " - " + id);
  User.find(id, function(err, user){
    if (err) {
      next(err);
    } else if (user) {
      req.user = user;
      next();
    } else {
      next(new Error('failed to load user'));
    }
  });
});

app.get('/user/:id', function(req, res){
  res.send('user ' + req.params.id);
}); 

app.get('/:user', function(request, response) {
    // debugger;
    console.log(request.params.id);
	var html = fs.readFileSync(__dirname + '/Public/index.html');
	response.writeHeader(200, {"Content-Type": "text/html"});   
	response.write(html);
	response.end();
});

app.use("/", express.static(__dirname + '/Public'));
app.listen(port);
console.log('Listening on port :' + port);
