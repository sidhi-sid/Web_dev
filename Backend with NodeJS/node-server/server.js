const express=require('express');
const server=express()//server gets created
//req is the request to server from client and res is the response of server back to client
//these fn are called middlewares
server.get('/',function(req,res,next){
 console.log("you");
 res.send("Hello World");
})
//:name is variable
server.get('/greet/:tod/:name',function(req,res,next){
	let tod="Morning";
	switch(req.params.tod){
		case "evening":tod="Evening";
		break;
		case "morning":tod="Morning";
		break;
}
	let greeting="Good "+tod+","+req.params.name;
	res.send(greeting);
})
server.listen(2127);//port gets opened 