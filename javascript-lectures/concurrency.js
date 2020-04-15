function hello(times,name){
	let count=0
	let loopId=setInterval(()=>{
		count++

		console.log("hello"+name)
		if(count===times){
			clearInterval(loopId)
		}

	},100)

}
hello(4,"sid")
hello(3,"i")