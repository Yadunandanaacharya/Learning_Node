// https://www.youtube.com/watch?v=EYKjBJDPvEU



var express = require('express')
var app = express();

app.set('view engine','ejs');

app.get('/', function(req, res){ 
    res.render('index',{user: "Great User",title:"homepage"});
});

app.listen(8080,()=>{a
    console.log('App is listening')
})
