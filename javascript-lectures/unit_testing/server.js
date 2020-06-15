const express=require('express')
const path=require('path')

const app=express()

app.use('/',express.static(path.join(__dirname,'public')))
app.listen(2222,()=>console.log('server started'))

app.post('/calcfare',(req,res)=>{
    let km=parseFloat(req.body.km)
    let min=parseInt(req.body.fare)

    let fare=50
    fare+=(km>5)?((km-5)*10):0
    fare+=(min>15)?((min-15)*2):0

    res.send({fare:fare})
})