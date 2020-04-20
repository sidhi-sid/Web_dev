function Person(name,age){
	this.name=name;
	this.age=age;	

}
Person.prototype.isAdult=function (){
	return this.age>=18;
}
Person.prototype.city="Delhi";
let p=new Person("harry potter",15);
let p2=new Person("John doe",30);

console.log(p.isAdult());
console.log(p2.isAdult());
console.log(p.isAdult==p2.isAdult);
//to create a single entity to two different objects of same type put the common entity in prototype class to reduce storage