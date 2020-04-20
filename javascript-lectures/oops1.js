function Person(name,age){
	this.name=name;
	this.age=age;
	return 10;
}
let p=new Person("harry potter",20);
let p2=new Person("John doe",30);
console.log("p= "+JSON.stringify(p));
console.log(p2);


//using new with fn new object is created and this opertors starts working for new object
//creating new objects belonging to the class