const express=require('express');
const server=express();

const m1=function(req,res,next){
    console.log("We are in middleware one");
    next();
}
const m2=function(req,res,next){
    console.log("We are in middleware two");
    next();
}
const m3=function(req,res,next){
    console.log("We are in middleware three");
    next();
}
const m4=function(req,res,next){
    console.log("We are in middleware four");
    next();
}
server.use(m1);
server.use('/a',m2);
server.get('/a',function(rq,res,next){
    res.send("Hello World");
})

server.use(m3);

server.listen(3232);