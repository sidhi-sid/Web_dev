const express=require('express')
const srv=express()



srv.get('/hello',function(req,res){
    res.send("Hello")
})

srv.use('/rename',express.static(__dirname+"/rename"))
srv.use(express.json())
srv.use(express.urlencoded({extended:true}))
const todoroute=require('./routes/todo')
srv.use('/todo',todoroute)
srv.listen(2112);