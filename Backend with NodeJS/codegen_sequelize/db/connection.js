const sequelize=require('sequelize')
const db=new sequelize('sampledb2','sampleuser2','samplepass2',{
    host:'localhost',
    dialect:'mysql'
})

db.authenticate()
.then(()=>console.log("Connection worked"))
.catch((err)=>console.log(err))