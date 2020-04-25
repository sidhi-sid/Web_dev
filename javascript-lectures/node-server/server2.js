const express=require('express');
const server=express()//server gets created
//req is the request to server from client and res is the response of server back to client
//these fn are called middlewares
server.get('/',function(req,res,next){
 console.log("you");
 res.send("Hello World");
})
//:name is variable
server.get('/greet/:tod',function(req,res,next){
	let tod="Morning";
	switch(req.params.tod){
		case "evening":tod="Evening";
		break;
		case "morning":tod="Morning";
		break;
}
	let greeting="Good "+tod+","+req.query.name;
	res.send(greeting);
})
server.get('/html',function (req,res,next) {
	// body...
	res.send(`
		<html>
		<body>
		<h1>This is an HTML page</h1>
		<i>This looks nice</i>
		</body>
		</html>
		`)
})
server.listen(2126);//port gets opened 