const sequelize=require('sequelize')
const DataTypes=sequelize.DataTypes
const db=new sequelize('sampledb2','sampleuser2','samplepass2',{
    host:'localhost',
    dialect:'mysql'
})

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
const Batch=db.define('Batch',{
    code:{
        type:DataTypes.STRING(8),
        primaryKey:true
    },
    year:DataTypes.INTEGER(4),
    start:DataTypes.DATE,
    end:DataTypes.DATE
})
//associations
Batch.belongsTo(course)
Batch.belongsTo(center)
Batch.belongsTo(season)

course.hasMany(Batch)
center.hasMany(Batch)
season.hasMany(Batch)

db.sync();

module.exports={
    db,
    Batch,
    teacher,
    season,
    course,
    center
}