// Global module
const myModule = (function () {
  // Module object
  const module: any = {},
    privateVariable = 'Hello World';

  function privateMethod() {
    // ...
  }

  module.publicProperty = 'Foobar';
  module.publicMethod = function () {
    console.log(privateVariable);
  };

  return module;
})();

console.log('myModule', myModule);

export {};
