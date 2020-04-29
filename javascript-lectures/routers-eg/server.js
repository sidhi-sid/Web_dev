const express=require('express');
const srv=express()
srv.get('/',function(req,res){
    console.log("you");
    res.send("Hello World");
   });
const teacherRoute=require('./routes/teachers');
const studentRoute=require('./routes/students');
srv.use('/students',studentRoute);
srv.use('/teachers',teacherRoute);
srv.listen(2231);