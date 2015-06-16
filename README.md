```
$ npm --version
2.10.1

$ node --version
v0.12.4

$ npm install

$ node run_a.js
bazbar
baz

$ node run_b.js
baz
bazbar

$ node sandbox_a.js
bazbar
baz

$ node sandbox_b.js

/Users/thoughtless/Desktop/sandbox-demo/a.js:3
var foo = b.foo();
            ^
TypeError: undefined is not a function
    at Object.<anonymous> (/Users/thoughtless/Desktop/sandbox-demo/a.js:3:13)
    at SandboxedModule._compile (/Users/thoughtless/Desktop/sandbox-demo/node_modules/sandboxed-module/lib/sandboxed_module.js:251:19)
    at createInnerSandboxedModule (/Users/thoughtless/Desktop/sandbox-demo/node_modules/sandboxed-module/lib/sandboxed_module.js:183:23)
    at SandboxedModule.RecursiveRequireProxy (/Users/thoughtless/Desktop/sandbox-demo/node_modules/sandboxed-module/lib/sandboxed_module.js:214:27)
    at SandboxedModule.requireInterceptor (/Users/thoughtless/Desktop/sandbox-demo/node_modules/sandboxed-module/lib/sandboxed_module.js:227:9)
    at Object.<anonymous> (/Users/thoughtless/Desktop/sandbox-demo/b.js:7:7)
    at SandboxedModule._compile (/Users/thoughtless/Desktop/sandbox-demo/node_modules/sandboxed-module/lib/sandboxed_module.js:251:19)
    at Function.SandboxedModule.load (/Users/thoughtless/Desktop/sandbox-demo/node_modules/sandboxed-module/lib/sandboxed_module.js:30:19)
    at Function.SandboxedModule.require (/Users/thoughtless/Desktop/sandbox-demo/node_modules/sandboxed-module/lib/sandboxed_module.js:36:15)
    at Object.<anonymous> (/Users/thoughtless/Desktop/sandbox-demo/sandbox_b.js:2:17)
```
