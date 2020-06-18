//inheritance and proto-chain
let a={p:10,q:"abc",r:false};
let b=Object.create(a);
let c=Object.create(b);

console.log(a);
console.log(b);
console.log(b.q);
console.log(c.q);
b.q="fgh";
console.log(b);
console.log(c.q); 
console.log(a.__proto__);
console.log(b.__proto__);
console.log(c.__proto__.__proto__);
console.log(a.q.__proto__==String.prototype);