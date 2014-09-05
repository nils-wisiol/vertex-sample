// init express framework
var app = require('express')();

// start server
var server = app.listen(function() {
	console.log('Listening on port %d', server.address().port);
});

app.get('*', function(req, res){
	res.set('Content-Type', 'text/plain');
	res.status(200);
	res.send('This is the vertex sample app. The node HTTP server it is using is listening on port ' + server.address().port + '.\nIf you installed this app using vertex, your request was reversed proxied by vertex/nginx to the node HTTP server.');
});
