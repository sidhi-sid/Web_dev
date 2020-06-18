const {MongoClient}=require('mongodb')
const MONGO_URL='mongodb://localhost:27017';
const DB_NAME='tododb';

async function readTasks(){
    const client= await MongoClient.connect(MONGO_URL)
    const tododb=client.db(DB_NAME)
    const todos=tododb.collection('todos')
   
    //todos.find({}).batchSize() batchsize tells how many rows needs to be read at a time
   const todoArr=await todos.find({}).toArray()  //converts all data into an array
   //{$and:[
    //{priority:{$lt:3}},
    //{priority:{$gt:1}}] }

    //({priority:{$exists:true}}).sort({priority:1}) --ordered in 1 to 4 order
    //({priority:{$exists:true}}).sort({priority:-1}) --ordered in 4 to 1 order(reverse)
   todoArr.forEach((todo)=>console.log(JSON.stringify(todo)))
}


readTasks()  