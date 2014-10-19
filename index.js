require('newrelic');

// var gzippo = require('gzippo');
var express = require('express');
// var basicAuth = require('basic-auth-connect');
// var logfmt = require("logfmt");
var app = express();
var serveStatic = require('serve-static');

process.env.PWD = process.cwd();
var homeUrl = process.env.PWD + "/public";

// app.use(basicAuth('plato', 'franklin'));
app.use(serveStatic(homeUrl, {'index': ['index.html']}))

var port = Number(process.env.PORT || 5000);

app.listen(port, function () {
    console.log("HOME URL: ", homeUrl);
    console.log("Listening on " + port);
});

//