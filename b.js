var B = {
  foo: function() { return "baz"; }
}

module.exports = B;

B.a = require("./a");
