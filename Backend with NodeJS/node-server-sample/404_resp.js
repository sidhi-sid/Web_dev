const express=require('express')
const server=express()
server.get('/a',(req,res)=>res.send("AAAA"))
server.get('/b',(req,res)=>res.send("BBBB"))
server.use((req,res)=>res.send("<h2>Error 404:s Page not found</h2>"))

server.listen(3234)