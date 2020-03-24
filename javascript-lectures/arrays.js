let arr=[1,2,3,4]
 console.log(arr.length);
 console.log(arr[2]);
 let arr2=[1,2,"hey",[4,5]]
 for(let i=0;i<arr2.length;i++)
... { console.log(arr2[i]);}
for(let val of arr2)
... { console.log(val);}
for(let index in arr2)
... { console.log(index);}
let fruits=["apple","mango"]
fruits.push("grapes");
 console.log(fruits);
 fruits.pop();
 console.log(fruits);
 fruits.shift();
 console.log(fruits);
 fruits.unshift("pear","banana")
 console.log(fruits);
 let notes=["sa","re","ga","ma","pa","da","ni","sa"];
  let spl=notes.splice(4);
 console.log(spl);
 console.log(notes);
 let sppl=notes.splice(2,2);
 console.log(sppl);
 console.log(notes);
 let vegs=["a","b","c","d","e"]
 let chg=vegs.splice(0,3,"f","g","h")
 console.log(chg);
 console.log(vegs);
 console.log(vegs.concat("i","j"))
 console.log(vegs);
