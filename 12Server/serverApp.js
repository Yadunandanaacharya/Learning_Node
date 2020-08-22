/*
When we make a request to a server and when we respond 
request = request + request headers
response = response data + response headers
Here headers is like in html page containing head part at 
the top like this "request" or "response", 
these headers tells browser document like "cotent type and status".
Contenet type can be plain text or html or json.
It's goona dela with different one in different way.
Ex: it renders html web page in browser, it doesn't do it for 
text file.
Contnent type telling browser about content.

In response headers we can use status like to say
evrything is conected very well*/
//Here 200 is status and content type id type of content like html
// txt or json
// We need to specify port number. We can set nodejs to listen
// to particular port for request, we need to do before send any 
//request. Otherwise it doesn't listen to any request.



var http = require('http');

// When we will send a request in below code function
// Will be fired and gives a response
var server = http.createServer(function(req,res){
    console.log('request was made ' + req.url)
    res.writeHead(200,{'Content-type' : 'text/plain'})
    res.end('Hey Yadu')  /*ends this response and send it to browser*/
});

server.listen(3000,'127.0.0.1')  /*portno and IP addres*/
console.log(`Yadu is listening to port no 3000 with IP${'127.0.0.1'}`)
