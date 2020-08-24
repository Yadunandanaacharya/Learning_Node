
var express = require('express')
// Firing a function of express with below code.
var  app = express();
//We need to listen to a port.

//Below when user requets '/' we are gonna fire a function.
app.get('/',function(req,res){
    res.send('This is Home page')
}); 
app.get('/contact',function(req,res){
    res.send('This is Home page')
});

//Helps to fetch data from database with respect to id.
app.get('/idis/:name', function(req, res) {
    res.send(req.params.name);
});
// app.get('/profile/:name',function(req,res){
//     res.send('You requested to see profile with id of',req.params.name);
// });


//Important don't use any strings inside "res.send" your output won't display
//instead you'll get error
//res.send('You requested to see profile with id of',req.params.name);

//if you use like above line you'll get error.

app.get('/apiis/:mac', function(req, res) {
    res.send(req.params.mac);
  });

app.listen(3000,()=>{
    console.log("Hi, I'm listening to your port")
});
