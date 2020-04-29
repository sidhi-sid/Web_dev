const express=require('express');
const router=express.Router;
const route=router();
//const route=require('express').Router()
let teachers=[   
     {name:"a",subject:"webd"},
    {name:"b",subject:"coding"}
];
route.get('/',(req,res)=>res.send(teachers));
route.get('/add',(req,res)=>{
    teachers.push({
        name:req.query.name,
        subject:req.query.subject
    })
    res.send(teachers);
});
route.get('/:id',(req,res)=>res.send(teachers[req.params.id]));
module.exports=route;