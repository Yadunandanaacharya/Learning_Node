var fs = require('fs');
const { AsyncLocalStorage } = require('async_hooks');

fs.mkdir('stuff',function(){
    fs.readFile('readme.txt','utf8',function(err, data){
        fs.writeFile('./stuff/writeme.txt',data,function(err,result){
            if(err) console.log('error', err);
        })
    });
});

// This helped me solving error.
// Before  I typed code like this
/*fs.mkdir('stuff',function(){
    fs.readFile('readme.txt','utf8',function(err, data){
        fs.writeFile('./stuff/writeme.txt',data)
    })
});*/
// Without writing callback for writefile since writefile 
// is also asynch we need to write callback for that also.