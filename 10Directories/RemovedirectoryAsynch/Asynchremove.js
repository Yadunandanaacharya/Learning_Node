var fs = require('fs')

fs.unlink('./stuff/writeme.txt',function(){
    fs.rmdir('stuff',function(){

    })
})

// You need to alwys write calback function for Asynchronus 
// commands