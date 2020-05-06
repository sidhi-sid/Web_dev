const express=require('express')
const todoroute=require('./routes/todo')
const srv=express()
srv.use(express.json())
srv.use(express.urlencoded({extended:true}))
srv.set('view engine','hbs')

srv.use('/todo',todoroute)




srv.listen(2345)