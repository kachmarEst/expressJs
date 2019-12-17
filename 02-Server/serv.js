
var fs = require('fs');
var path1 = './index.html';
var path2 = './about.html';
var path3 = './contact.html';

var http = require('http');
var url = require('url');
var server = http.createServer(function (req, res) {
    var page = url.parse(req.url).pathname;
    console.log(page);
    if (page == '/') {
        fs.readFile('./index.html', 'utf-8', function (err, file) {

            if (!err) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(file);
            }
            else {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write('<h1>ERROR 404!</h1>');
            }
            res.end('');
        });
    }
    else if (page == '/about') {
        fs.readFile('./about.html', 'utf-8', function (err, file) {

            if (!err) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(file);
            }
            else {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write('<h1>ERROR 404!</h1>');
            }
            res.end('');
        });
    } else if (page == '/contact') {
        fs.readFile('./contact.html', 'utf-8', function (err, file) {

            if (!err) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(file);
            }
            else {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write('<h1>ERROR 404!</h1>');
            }
            res.end('');
        });
    }

});
server.listen(3000);



