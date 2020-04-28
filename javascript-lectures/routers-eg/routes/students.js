const route=require('express').Router()
let students=[
    {name:"a1",college:"Ait",year:"I"},
    {name:"b1",college:"DTU",year:"II"},
    {name:"c1",college:"IIT",year:"I"},
    {name:"d1",college:"IIT-D",year:"III"}
]
route.get('/',(req,res)=>res.send(students))
route.get('/:id',(req,res)=>res.send(students[req.params.id]))
module.exports=route