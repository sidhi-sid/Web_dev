const {DataTypes}=require('sequelize')
const {db}=require('./connection')

const course=db.define('course',{
    id:{
        type:DataTypes.STRING(2),
        primaryKey:true
    },
    name:DataTypes.STRING(20)
})
const teacher=db.define('teacher',{
    name:{
        type:DataTypes.STRING(15),
        allowNull:false
    }
})
const center=db.define('center',{
    id:{
        type:DataTypes.STRING(2),
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING(15),
        allowNull:false
    },
    city:{
        type:DataTypes.STRING(15),
        allowNull:false
    }

})
const season=db.define('season',{
    id:{
        type:DataTypes.STRING(2),
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING(10),
        allowNull:false
    },
})
const batch=db.define('batch',{
    code:{
        type:DataTypes.STRING(8),
        primaryKey:true
    },
    start:DataTypes.DATE,
    end:DataTypes.DATE
})
//associations
batch.belongsTo(course)
batch.belongsTo(center)
