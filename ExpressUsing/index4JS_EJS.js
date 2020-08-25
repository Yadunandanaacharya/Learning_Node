var express = require('express');

var app = express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
   res.sendFile(__dirname+'/index.html')
});
app.get('/contact',(req,res )=>{
   res.sendFile(__dirname+ '/contact.html')
});


var students = {
    1 : {
        name : 'Ram',
        subjects : ['C++', 'Java', 'Python']
    },
    2 : {
        name : 'Sham',
        subjects : ['C++',  'Python']
    },
    3 : {
        name : 'Bham',
        subjects : ['C++', 'Java', 'Python', 'Scala']
    }
}


app.get('/student1/:id',(req,res)=>{
   res.render('student1',{name : students[req.params.id].name ,id:req.params.id,
subjects:students[req.params.id].subjects })
});


app.listen(3000,function(){
    console.log('Listening')
})
