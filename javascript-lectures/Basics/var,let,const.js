let myvar=10;

> function alpha()
... { let myvar=11;
... if(true) {
..... let myvar=21;
..... console.log(myvar);
       }
... console.log(myvar);
... } 
    alpha();

    var myvar1=10;

> function alpha()
... { var myvar1=11;
... if(true) {
..... var myvar1=21;
..... console.log(myvar1);
       }
... console.log(myvar1);
... } 
    alpha();

    const myvar2=10;

> function alpha()
... { const myvar2=11;
... if(true) {
..... const myvar2=21;
..... console.log(myvar2);
       }
... console.log(myvar2);
... } 
    alpha();