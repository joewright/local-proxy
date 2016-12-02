var request = require('request').defaults({jar:true});
var express = require('express');
var argv = require('yargs').argv;
var bodyParser = require('body-parser')

var PORT = process.env.PORT || argv['port'] || 3030;
var BASE_URL = argv['base-url'];
if (!BASE_URL) {
    throw new Error('a --base-url is required');
}

var app = express();

app.all('*', bodyParser.json(), bodyParser.urlencoded({
    extended: false
}), function (req, res) {
    var options = {headers: [req.headers]};
    if (req.body) {
        options.body = req.body
        options.json = true;
    }
    request[req.method.toLowerCase()](BASE_URL + req.url, options)
        .pipe(res);
});

app.listen(PORT, function () {
    console.log('Proxy server listening on port', PORT);
});