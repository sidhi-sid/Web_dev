const sequelize=require('sequelize')
const db=new sequelize('sampledb1','sampleuser1','samplepass1',{
    host:'localhost',
    dialect:'mysql'
})

db.authenticate()
.then(()=>console.log("Connection worked"))
.catch((err)=>console.log(err))