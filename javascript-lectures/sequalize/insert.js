const {db,student}=require('./model')

const task=async ()=>{
    try{
        await db.sync()
        //insert a student
        for(let i=0;i<30;i++){
        await student.create({
            name:(['Tom','Nick','Harry','Ram','Sally','Nia','Thomas','Neha','Nancy','Shalini'])[parseInt(Math.random()*10)],
            age:10+parseInt(Math.random()*10)
        })
    }
}
    catch(e){
        console.error(e)
    }
}
task();