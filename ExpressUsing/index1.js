var express = require('express');

var app = express();


app.get('/',(req,res)=>{
   res.send('this is home page')
});
app.get('/contact',(req,res)=>{
   res.send('Contact us ')
});


app.listen(3000,function(){
    console.log('Listening')
})
