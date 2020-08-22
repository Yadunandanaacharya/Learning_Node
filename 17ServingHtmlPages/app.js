var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    console.log('request was made ' + req.url)
    res.writeHead(200,{'Content-type' : 'text/html'})
    var myreadstream = fs.createReadStream(__dirname+'/index.html','utf8');
    myreadstream.pipe(res); 

});
server.listen(3000,'127.0.0.1')  /*portno and IP addres*/
console.log(`Yadu is listening to port no 3000 with IP${'127.0.0.1'}`)