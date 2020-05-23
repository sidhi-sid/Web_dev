const {db,student}=require('./model')

const task=async ()=>{
    try{
        await db.sync()
        //insert a student
       const students=await student.findAll({
           where:{age:{$gt: 12}},
           order:[
               ['age','DESC'],
               ['name','ASC'],
           ]
       })
       students.forEach(student=>console.log(`
       name:${student.dataValues.name} \t age:${student.dataValues.age}`
        ))
    }
    catch(e){
        console.error(e)
    }
}
task();