var express = require('express');

var app = express();


app.get('/',(req,res)=>{
   res.send('this is home page')
});
app.get('/contact',(req,res)=>{
   res.send('Contact us ')
});

//With json data




app.get('/student/:id',(req,res)=>{
   res.send('You have requested for student id '+ req.params.id)
});


var students = {
    name : 'ram',
    marks : 67,
    height : 6
}

app.get('/students/:name',(req,res)=>{
   res.send('You have requested for student id: '+students[req.params.name])
});




app.listen(3000,function(){
    console.log('Listening')
})
