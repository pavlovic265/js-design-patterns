const _ = {
  min: (num: number[]) => num,
};

const jQuery = (selector: string) => ({
  html: (text: string) => `${selector} ${text}`,
});

// Global module
const myModule = (function (jQ, _) {
  function privateMethod1() {
    jQ('.container').html('test');
  }

  function privateMethod2() {
    console.log(_.min([10, 5, 100, 2, 1000]));
  }

  return {
    publicMethod: function () {
      privateMethod1();
    },
  };

  // Pull in jQuery and Underscore
})(jQuery, _);

myModule.publicMethod();

export {};
