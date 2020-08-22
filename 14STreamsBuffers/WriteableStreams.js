// If the data coming in downstream, filling up ""Buffer"" 
// then when the buffer is full would pass on chunk of data
// yo read and we could use a listener which was on a data
// to listenout whenever we received one least chunk of data and 
// we could do something with that, we logged into the console.
// But typically we will do something different with that
// sending to the client or creating new file with that

var http = require('http');
var fs = require('fs');
const { dirname } = require('path');

var myreadstream = fs.createReadStream(__dirname+'/readMe.txt','utf8');

var myWriteStream = fs.createWriteStream(__dirname+'/writeMe.txt')
// now we will send data to writeMe.txt with path we have 
// mentioned

myreadstream.on('data',function name(chunk) {
    console.log("new data received")
    myWriteStream.write(chunk)
    
});