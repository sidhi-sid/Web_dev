const {MongoClient}=require('mongodb')
const MONGO_URL='mongodb://localhost:27017';
const DB_NAME='tododb';

async function writeTasks(){
    const client= await MongoClient.connect(MONGO_URL)
    const tododb=client.db(DB_NAME)
    const todos=tododb.collection('todos')
   
    const result=await todos.insertMany([
        {
            task:'another task',
            owner:'security'
        },
        {
            task:'more tasks',
            owner:'CEO'
        },
        {
            task:'task will be done later',
            owner:'manager'
        },
        {
            task:'bonus tasks',
            owner:'executive'
        }
    ])
    console.log(result)
}


writeTasks()