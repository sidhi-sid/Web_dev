const sequelize=require('sequelize')
const datatypes=sequelize.DataTypes

const db=new sequelize('sampledb1','sampleuser1','samplepass1',{
    host:'localhost',
    dialect:'mysql'
})

const student=db.define('student',{
    name:{
        type:datatypes.STRING(40),
        allowNull: false
    },
    age:{
        type:datatypes.INTEGER(2),
        allowNull: false,
        defaultValue:-1
    }
})

db.sync({alter:true})//even if table exists then it gets changed (force can also be used in place of alter) but force deletes the table and then creates it again so use alter as it is non destructive in nature
.then(()=>console.log("Database synchronised"))
.catch(console.error)