var b = require("./b");

var foo = b.foo();
foo = foo + "bar"

module.exports = {
  b: b,
  foo: function() { return foo; }
}
