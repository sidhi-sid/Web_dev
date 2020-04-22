function myfun(){
... console.log("hello")
... }
 myfun();

 (function (){
... console.log("hey")
... }) ()

function count(){
var i=1;
function plus(){
console.log(++i);
}
return plus;
}
var c=count();
c();
c();