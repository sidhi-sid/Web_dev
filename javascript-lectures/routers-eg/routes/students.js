const route=require('express').Router();
let students=[
    {name:"a1",college:"Ait",year:"I"},
    {name:"b1",college:"DTU",year:"II"},
    {name:"c1",college:"IIT",year:"I"},
    {name:"d1",college:"IIT-D",year:"III"}
];
route.get('/',(req,res)=>res.send(students));
route.post('/',(req,res)=>{
    students.push({
        name:req.body.name,
        college:req.body.college,
        year:req.body.year
    })
    res.send(students)
})

route.get('/add',(req,res)=>{
    students.push({
        name:req.query.name,
        subject:req.query.college,
        year:req.query.year
    })
    res.send(students);
});
route.get('/:id',(req,res)=>res.send(students[req.params.id]));
//if used before then execute like
//route.get('/:id',(req,res)=>{
    //if(isNaN(parseInt(req.params.id))){
   //     next();
    //}
    //res.send(students[req.params.id])
    //})
//}
module.exports=route;