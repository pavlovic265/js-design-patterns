const mySingleton = (function () {
  // Instance stores a reference to the Singleton
  let instance;

  function init() {
    // Singleton

    // Private methods and variables
    function privateMethod() {
      console.log('I am private');
    }

    const privateVariable = 'Im also private';

    const privateRandomNumber = Math.random();

    return {
      // Public methods and variables
      publicMethod: function () {
        console.log('The public can see me!');
      },

      publicProperty: 'I am also public',

      getRandomNumber: function () {
        return privateRandomNumber;
      },
    };
  }

  return {
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function () {
      if (!instance) {
        instance = init();
      }

      return instance;
    },
  };
})();

const myBadSingleton = (function () {
  // Instance stores a reference to the Singleton
  let instance;

  function init() {
    // Singleton

    const privateRandomNumber = Math.random();

    return {
      getRandomNumber: function () {
        return privateRandomNumber;
      },
    };
  }

  return {
    // Always create a new Singleton instance
    getInstance: function () {
      instance = init();

      return instance;
    },
  };
})();

// Usage:

const singleA = mySingleton.getInstance();
const singleB = mySingleton.getInstance();
console.log(singleA.getRandomNumber() === singleB.getRandomNumber()); // true

const badSingleA = myBadSingleton.getInstance();
const badSingleB = myBadSingleton.getInstance();
console.log(badSingleA.getRandomNumber() !== badSingleB.getRandomNumber()); // true

// Note: as we are working with random numbers, there is a
// mathematical possibility both numbers will be the same,
// however unlikely. The above example should otherwise still
// be valid.
