var express = require('express');
var app = express();

var port = process.env.PORT || 30025;

// app.param('id', /^\d+$/);

/* 
var User  = {
	find: function(id, func) {
		func(null, 'Sue');
	}
};

app.param('user', function(request, response, next, id){
  console.log("User called: " + next + " - " + id);
  User.find(id, function(err, user){
    if (err) {
      next(err);
    } else if (user) {
      request.user = user;
      next();
    } else {
      next(new Error('failed to load user'));
    }
  });
}); 

app.get('/user/:id', function(request, response){
  response.send('user ' + request.params.id);
}); 

app.get('/:user', function(request, response) {
    // debugger;
    console.log(request.params.id);
	var html = fs.readFileSync(__dirname + '/Public/index.html');
	response.writeHeader(200, {"Content-Type": "text/html"});   
	response.write(html);
	response.end();
}); */

app.use("/", express.static(__dirname + '/Public'));
app.listen(port);
console.log('Listening on port :' + port);
