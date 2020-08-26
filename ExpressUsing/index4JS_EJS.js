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
        subjects : ['Simple linear regression+', 'Multiple linear', 'Neural networks']
    },
    2 : {
        name : 'Sham',
        subjects : ['Chemistry',  'Physics']
    },
    3 : {
        name : 'Bham',
        subjects : ['Maths', 'Biology', 'Python', 'Hadoop']
    }
}


app.get('/studentsare/:id',(req,res)=>{
   res.render('student2',{name : students[req.params.id].name ,id:req.params.id,
    subjects : students[req.params.id].subjects
 })
});


app.listen(3000,function(){
    console.log('Listening')
})


