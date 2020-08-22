var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    console.log('request was made'  + req.url);
    if (req.url === '/home' || req.url === '/'){
        res.writeHead(200,{'Content-type': 'text/html'})
    fs.createReadStream(__dirname+'/index.html').pipe(res)
    }
    else if (req.url === '/contact'){
        res.writeHead(200,{'Content-type': 'text/html'})
    fs.createReadStream(__dirname+'/contact.html').pipe(res)
    }
    else if (req.url === '/api/ninjas'){
        var ninjas = [{'Name':'Yadu','Age':23,'Country':'India'}];
        res.writeHead(200,{'Content-type':'application/json'})
        res.end(JSON.stringify(ninjas)) 
    }else{
        res.writeHead(404,{'Content-type':'text/html'});
        fs.createReadStream(__dirname+'/Error.html').pipe(res);
    }

});

server.listen(3000,'127.0.0.1');
console.log(`Ok man, I'm listening to server${'127.0.0.1'}`)

// In webpage if you type: 127.0.0.1:3000/api then you
// need to serve api to client
// 127.0.0.1:3000/home then you need to send data of home.
// as you type this you will get home in here's output console
// This response output printed in output console given mainly by: "req.url"