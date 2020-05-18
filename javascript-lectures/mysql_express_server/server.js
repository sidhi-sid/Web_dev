const express=require('express')
const srv=express()
const db=require('./db')
srv.use(express.json())
srv.use(express.urlencoded({extended:true}))
srv.set("view engine","hbs")
srv.get('/',(req,res)=>{
    db.getallpersons()
        .then((persons)=>{
            res.render('persons',{persons})
        })
        .catch((err)=>{

        })
})
srv.get('/add',(req,res)=>{
    res.render('persons_add')
})
srv.post('/add',(req,res)=>{
    db.addnewperson(req.body.name,req.body.age,req.body.city)
    .then(()=>{
        res.redirect('/')
    })
    .catch((err)=>{
        res.send(err)
    })
})
srv.listen(4444,()=>{
    console.log("Server started")
})