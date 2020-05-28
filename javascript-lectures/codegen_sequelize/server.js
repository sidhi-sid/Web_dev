const express=require('express')
const path=require('path')
const {center,season,course}=require('./db/models')
const app=express()
app.set('view engine','hbs')
app.set('views',path.resolve(__dirname,'./views'))
app.get('/batchcode',async(req,res)=>{
    try{
        const centers=await center.findAll()
        const seasons=await season.findAll()
        const courses=await course.findAll()
        const years=[2016,2017,2018,2019,2020,2021]
        res.render('batchcode',{
            centers,seasons,courses,years
        })
    }catch(e){
        console.error(e)
    }
   
})
module.exports={
    app
}
