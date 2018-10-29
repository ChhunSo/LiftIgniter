var express = require('express'),
	app = express(),
	port = process.env.PORT || 8080;


app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname));

app.get('/', function(req,res) {
	res.send('index');
});


app.listen(port, function(){
	console.log('running on localhost:' + port);
})