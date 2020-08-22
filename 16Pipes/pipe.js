// In previous program I've been Reading data from readstream
// writing it to writestream
// This act of reading data from read stream and transfering to
// write stream is common in nodejs, and to do this one method
// followed known as pipes.

// Manipulate
// Pipe will take data from read stream and pipe it to write
// stream "here we don't have to manually readevents and write events"

var http = require('http');
var fs = require('fs');
const { dirname } = require('path');

// var myreadstream = fs.createReadStream('./14STreamsBuffers/readMe.txt','utf8');

// var myreadstream = fs.createReadStream(__dirname+'/readMe.txt','utf8');
// var myWriteStream = fs.createWriteStream(__dirname+'/writeMe.txt')



// now we will send data to writeMe.txt with path we have 
// mentioned
// Now we are piping from readable stream to writable stream
// Below will same as previous program of read & write were doing.
// You need to have readMe text file in this folder


// var myreadstream = fs.createReadStream(__dirname+'/readMe.txt','utf8');
// var myWriteStream = fs.createWriteStream(__dirname+'/writeMe.txt')
// myreadstream.pipe(myWriteStream);

// Returning to the server, to send data to the user, in server 
// program I've sent plain text to the server, now we will send 
// contents of readMe.txt
// we can read from a file &

var server = http.createServer(function(req,res){
    console.log('request was made ' + req.url)
    res.writeHead(200,{'Content-type' : 'text/plain'})
    var myreadstream = fs.createReadStream(__dirname+'/readMe.txt','utf8');
var myWriteStream = fs.createWriteStream(__dirname+'/writeMe.txt')
myreadstream.pipe(res); 
/*used res because will send response to user not to writMe file*/

      /*ends this response and send it to browser*/
});
server.listen(3000,'127.0.0.1')  /*portno and IP addres*/
console.log(`Yadu is listening to port no 3000 with IP${'127.0.0.1'}`)

// Data will be there in web page.
