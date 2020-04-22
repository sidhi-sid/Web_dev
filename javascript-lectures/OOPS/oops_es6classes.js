class Person{
	constructor(name,age){
	this.name=name;
	this.age=age;
	}
	
}
class student extends Person{
	constructor(name,age,school){
		super(name,age) //super calls constructor of parent class
		this.school=school;//this commands can't be used before super ()

	}
}
let p=new Person("harry potter",20);
let s=new student("ron",17,"harry");
console.log(p);
console.log(s);
//new is to be used to create objects to classes