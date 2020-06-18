const express=require('express')
const srv=express()
const path=require('path')
srv.use(express.json())
srv.use(express.urlencoded({extended:true}))

srv.set("view engine","hbs")

srv.use('/pages',require('./routes/pages').route)
srv.use('/api',require('./routes/api').route)
srv.use('/',express.static(path.join(__dirname,'public_static')))
srv.listen(4444,()=>{
    console.log("Server started")
})