const express=require('express')
const srv=express()
srv.use(express.json())
srv.use(express.urlencoded({extended:true}))
srv.set("view engine","hbs")
srv.get('/',(req,res)=>{//hardcoding the values of persons
    res.render('persons',{
        persons:[
            {name:'abc',age:21,city:'Bhopal'},
            {name:'def',age:20,city:'Delhi'}
        ]
    })
})
srv.get('/add',(req,res)=>{
    res.render('persons_add')
})
srv.post('/add',(req,res)=>{
    
})
srv.listen(4444,()=>{
    console.log("Server started")
})