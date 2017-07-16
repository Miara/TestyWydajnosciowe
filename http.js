/**
 * Created by wojtek on 26.06.17.
 */
var express = require('express');
var app = express();

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', function(req, res) {
    res.send("Ping");
});

app.get('/ajax', function(req, res) {
    res.sendfile("httpTester.html");
});

app.get('/xhr', function(req, res) {
    res.sendfile("xhrTester.html");
});

app.listen(process.env.PORT || 8080);
console.log('Server is running on Port 8080');
