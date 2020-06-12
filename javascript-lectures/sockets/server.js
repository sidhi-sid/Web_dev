const http=require('http') // as socket.io requires http server
const express=require('express')
const app=express()
const socketio=require('socket.io')

const server=http.createServer(app) //creating server
const io=socketio(server)
io.on('connection',(socket)=>{
    console.log("Connected with socket id =",socket.id)
})
app.use('/',express.static(__dirname+'/public'))

server.listen(3344,()=>{
    console.log("Server Started")
})

//to check whether sockets are working or not
// use localhost:3344/socket.io/socket.io.js in browser and it must return a complex js file