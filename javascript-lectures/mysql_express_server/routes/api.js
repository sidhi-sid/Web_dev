const route=require('express').Router()
const db=require('../db')
route.get('/persons/',(req,res)=>{
    //send all persons as an array here
   
        db.getallpersons()
        .then((persons)=>res.send(persons))
        .catch((err)=>res.send({error:err}))
  
  
})

route.post('/persons/',(req,res)=>{
    //add the new person
    db.addnewperson(req.body.name,req.body.age,req.body.city)
        .then(()=>res.redirect('/api/persons/'))
        .catch((err)=>res.send({error:err}))
})

exports=module.exports={
    route
}