const myNamespace = (function () {
  // A private counter variable
  let myPrivateVar = 0;

  // A private function which logs any arguments
  const myPrivateMethod = function (foo) {
    console.log(foo);
  };

  return {
    // A public variable
    myPublicVar: 'foo',

    // A public function utilizing privates
    myPublicFunction: function (bar) {
      // Increment our private counter
      myPrivateVar++;
      console.log('myPrivateVar', myPrivateVar);

      // Call our private method using bar
      myPrivateMethod(bar);
    },
  };
})();
