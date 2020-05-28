const {db}=require('./db/models')
const {app}=require('./server')

const start=async()=>{
    try{
        await db.sync();
        app.listen(3131,()=>{
            console.log("Server started")
        })
    }
    catch(e){
        console.error(e)
    }
}

start()