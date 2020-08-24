//Write callback function as you have written in files inside
// D:\GITHUB_REPO_donot_add_delete\Exploring-Javascript\70Express\appis.js
// Callback is very very important


var express = require('express')
// Firing a function of express with below code.
var  app = express();
//We need to listen to a port.

//Below when user requets '/' we are gonna fire a function.
app.get('/',function(req,res){
    res.send('This is Home page')
}); 
app.get('/contact',function(req,res){
    res.send('This is Contac page')
});

// without callback this code won't run
// app.listen(3000)
//IMPORTANT: JUST ABOVE SINGLE LINE CODE WON'T EXECUTE, GIVES YOU DIFFERENT TYPE OF ERROR.


//Important don't use any strings inside "res.send" your output won't display
//instead you'll get error
//res.send('You requested to see profile with id of',req.params.name);

//if you use like above line you'll get error.


app.listen(3000,()=>{
    console.log('App is listening')
});
