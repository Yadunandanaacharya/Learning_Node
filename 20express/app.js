
var express = require('express')
// Firing a function of express with below code.
var  app = express();
//We need to listen to a port.

//Below when user requets '/' we are gonna fire a function.
app.get('/',function(req,res){
    res.send('This is Home page')
}); 
app.listen(3000)