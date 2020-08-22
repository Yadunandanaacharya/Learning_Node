
var fs = require('fs');

//Unlink code to delete one file
// fs.unlink('writeMe.txt');

//To create a directory

// fs.mkdirSync('ThisIsNewDirectory');

//You can see this in your folder above named folder had been crated.

//To remove directory

fs.rmdirSync('ThisIsNewDirectory');

//We have mentioned Sync so thay above is blocking method

//When you use Asynchronu, you need to use callback function

