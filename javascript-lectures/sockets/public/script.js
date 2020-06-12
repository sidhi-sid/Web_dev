let socket=io()

let boombtn=document.getElementById('boom')
boombtn.onclick=function(){
    socket.emit('boom') //emit event into socket
}

socket.on('whizz',()=>{
    let div=document.createEvent('div')
    div.innerText="whizz"
    document.body.appendChild(div)
})