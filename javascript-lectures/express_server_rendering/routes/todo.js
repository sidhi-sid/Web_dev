const route=require('express').Router()
let todos=[
    {task:"First task"},
    {task:"Second task"}
]
route.get('/',function(req,res){
res.render('todo.hbs',{todos})
})

route.post('/',function(req,res){
todos.push({
    task:req.body.newtodo
})
res.redirect('todo')
})
module.exports=route