//When you want to send html page files to client
//BUT ALL HTML FILES SHOULD BE SAME DIRECTORY


//Don't just stop with single you tuve videos.
//Because of watching codewithharry videos, you fixed one error
// where your express app was not executinng but you wrote callback function
// inside app.listen(3000,()=>)
//  like this so it worked fine.

var express = require('express')
// Firing a function of express with below code.
var  app = express();
//We need to listen to a port.
app.set('view engine','ejs')

//cretae viewfolder
//SENDING HTML FILE

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html')
}); 
app.get('/contact',function(req,res){
    res.sendFile(__dirname + '/contact.html')
});

//INJECTING SOME DYNAMIC CONTENT, MEANS IF YOU WANT TO GET DETAILS OF SOME PERSON
//BY GIVING SOME ID AND ALL INFORMATION YOU'LL FETCH FROM DATABASE AND PRINT IN 
//WEB BROWSER
//INJECT SOEM DYNAMIC CONTENET
//WE CAN DO ABOVE BY TEMPLATE ENGINE

//EJS IS KIND OF TEMPLATE ENGINE


//Helps to fetch data from database with respect to id.
app.get('/profile/:name',function(req,res){
    res.render('profile',{person: req.params.name})
});

app.get('/this', function(req, res){ 
 	res.render('index',{user: "Great User",title:"homepage"});
});


//Important don't use any strings inside "res.send" your output won't display
//instead you'll get error
//res.send('You requested to see profile with id of',req.params.name);

//if you use like above line you'll get error.

// app.get('/profile/:ID',function(req,res){
//     res.render('profile',{person: req.params.ID})
// });

//We will use render method here which send html file data of view to the browser

// app.get('/profile/:name',function(req,res){
//     res.send('You requested to see profile with id of',req.params.name);
// });
// app.listen(3000) tHIS IS SINGLE LIENC CODE WON'T WORK

const port = 3000;
app.listen(port,()=>{
    console.log(`This app is listening now to port ${port}`)
});


// Important: if your code not executing here then press kill terminal again run it.

//Tell ecpress as we will use ejs as view eengine. or template engine.

//Using set methid