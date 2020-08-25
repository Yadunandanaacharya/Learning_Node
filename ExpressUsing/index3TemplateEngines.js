var express = require('express');

var app = express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
   res.sendFile(__dirname+'/index.html')
});
app.get('/contact',(req,res )=>{
   res.sendFile(__dirname+ '/contact.html')
});

//With json data




app.get('/student/:id',(req,res)=>{
   res.send('You have requested for student id '+ req.params.id)
});


var students = {
    1 : 'ram',
    2 : 'sham',
    3 : 'bham'
}

// app.get('/students/:name',(req,res)=>{
//    res.send('You have requested for student id: '+students[req.params.name])
// });


app.get('/student1/:id',(req,res)=>{
   res.render('student1',{name : students[req.params.id],id:req.params.id})
});




app.listen(3000,function(){
    console.log('Listening')
})
