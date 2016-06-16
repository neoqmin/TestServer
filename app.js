var express = require('express')
    , http = require('http')
    , app = express()
    , bodyParser = require('body-parser')
    , server = http.createServer(app);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

var mongoose = require('mongoose');

app.get('/', function (req, res) {
    res.send('Hello /');
});

app.get('/world.html', function (req, res) {
    res.send('Hello World');
});

app.post('/', function (req, res) {
    res.send('post hello');
});

server.listen(8000, function() {
    console.log('Express server listening on port ' + server.address().port);
});