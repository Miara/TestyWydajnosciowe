var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendfile('socketTester.html');
});

io.on('connection', function(socket){
    console.log('A user connected');
    socket.on('msg', function(data){
        console.log("PING");
        socket.emit('newmsg', {});
    });
});


http.listen(8080, function(){
    console.log('listening on localhost:8080');
});