var http = require('http');
var fs = require('fs');
const { EventEmitter } = require('events');

// __dirname will give current directory
// forward slash below due to presense of that folder in current 
//working directory
// fs.createReadStream is inherited from EventEmitter
var myReadStream = fs.createReadStream(__dirname+'/readMe.txt','utf8')
// data event and firing callback everytime we receives some data
myReadStream.on('data',function(chunk){
    console.log('chunck received');
    console.log(chunk)
});

// output:chunck received
// { <Buffer 57 72 69 74 61 62 6c 65 20 73 74 72 65 61 6d 20 2d 20 61 6c 6c 6f 77  */}
// 20 6e 6f 64 65 6a 73 20 74 6f 20 77 72 69 74 65 20 64 61 74 61 20 74 6f 20 73 74 ... 223 more bytes>
// Now above your are receiving only buffer because you didn't mention
// utf8 when you mention ""utf8"" your actual text will appear"
