var  http = require('http');
var  fs = require('fs');
 

var server = http.createServer(function(req,res){
    console.log('request was made '+req.url);
    res.writeHead(200,{'Content-Type':'application/json'});
    var myobj = {
        name : 'Yadu',
        age : 23,
        Village : 'Kunjibettu'
    };
res.end(JSON.stringify(myobj))
});
// In res.end expects either string or or buffer to send to client.
// So we need to serialize myobj, with json format
// we can do by using json.stringify

server.listen(3000,'127.0.0.1');
console.log('Hai, Yadu is listening to port')