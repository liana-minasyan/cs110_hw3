const http = require('http');

const httpServer = http.createServer(function(req, res) {

    if(req.url === '/lia') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Hello This is  Liana\n');
    }
    if(req.url === '/haha') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Life is  good\n');
    }
    if(req.url === '/again') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Hope you are not bored\n');
    }
     if(req.url === '/try') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('It is time to try some new pants\n');
    }
     if(req.url === '/done') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('have a nice day\n');
    }
	else {
        res.writeHead(404, {'Content-Type' : 'text/plain'});
        res.end("Nope!");
    }




});
httpServer.listen(3001);