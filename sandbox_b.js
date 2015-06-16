sandbox = require("sandboxed-module");
var b = sandbox.require("./b");

console.log(b.foo());
console.log(b.a.foo());
