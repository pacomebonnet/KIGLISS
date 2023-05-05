var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});


app.get('/jquery', function(req, res){
	res.sendFile(__dirname + '/jquery-3.6.4.min.js');
});

app.get('/style.css', function(req, res){
	res.sendFile(__dirname + '/style.css');
});

app.get('/KIGLISS_LOGO', function(req, res){
	res.sendFile(__dirname + '/img/KIGLISS_LOGO.svg');
});

app.get('/bg', function(req, res){
	res.sendFile(__dirname + '/img/bg_jungle@2x.png');
});

app.get('/plane', function(req, res){
	res.sendFile(__dirname + '/img/_iconairplane.svg');
});


app.get('/index2', function(req, res){
	res.sendFile(__dirname + '/index2.html');
});

app.get('/CLOSE', function(req, res){
	res.sendFile(__dirname + '/img/BTN.CLOSE.png');
});

app.get('/mainsvg', function(req, res){
	res.sendFile(__dirname + '/img/mainsvg 1.png');
});

app.get('/push', function(req, res){
	res.sendFile(__dirname + '/img/Bouton.Push.png');
});

app.get('/jump', function(req, res){
	res.sendFile(__dirname + '/img/Bouton.Jump.png');
});

app.get('/jquery0', function(req, res){
	res.sendFile(__dirname + '/jquery0');
});

app.get('Baloo2-Bold', function(req, res){
	res.sendFile(__dirname + '/typo/Baloo2-Bold.ttf');
});



var userId = 0;

io.on('connection', function(socket){
  socket.userId = userId ++;
  console.log('a user connected, user id: ' + socket.userId);

  socket.on('spawn', function(msg){
		//msg = JSON.parse(msg);
		console.log('message from user ' + msg.pseudo);
		io.emit("spawn",msg.pseudo);
  });

  socket.on('move', function(msg){
	//msg = JSON.parse(msg);
	console.log('user want to move ', msg);
	io.emit("move",msg);
});
  
});


http.listen(3000, function(){
	console.log('listening on *:3000');
});