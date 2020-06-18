const express=require('express');
const srv=express()
srv.get('/',function(req,res){
    console.log("you");
    res.send("Hello World");
   });
srv.use(express.json())
//a middleware that turns json object in body into JS
srv.use(express.urlencoded({extended:true}))
//a middleware decodes a body if it is in url encoded format
const teacherRoute=require('./routes/teachers');
const studentRoute=require('./routes/students');
srv.use('/students',studentRoute);
srv.use('/teachers',teacherRoute);
srv.listen(2231);