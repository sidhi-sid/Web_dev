(function(x)
{ delete x;
 return x; })(1);

 var foo = { bar: function()
  { return this.baz; }, 
  baz: 1 }; 
  (function()
  { return typeof arguments[0](); })(foo.bar);

  var foo = { bar: function()
  { return this.baz; }, 
  baz: 1 }
   typeof (f = foo.bar)();

   (function()
    { return (() => this.x).bind({ x: 'inner' })(), (() => this.x)() }).call({ x: 'outer' });

 var x = 1; 
 if (function f()
 {}) { x += typeof f; } x;

 (function(foo)
 { return typeof foo.bar; })({ foo: { bar: 1 } });

 (function f()
 { function f()
 { return 1; } 
 return f();
  function f()
  { return 2; } })();

  (function f(f)
  { return typeof f(); 
  })(function(){ return 1; });

  var x = 1; 
  if (function f(){}) 
  { x += typeof f; } x;

 3 [4,5]           1