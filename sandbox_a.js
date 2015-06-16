sandbox = require("sandboxed-module");
var a = sandbox.require("./a");

console.log(a.foo());
console.log(a.b.foo());
