const MY_GLOBAL = { nextId: () => Math.random() };
const vehicle = {
  getModel: function () {
    console.log("The model of this vehicle is.." + this.model);
  },
};

const car = Object.create(vehicle, {
  id: {
    value: MY_GLOBAL.nextId(),
    // writable:false, configurable:false by default
    enumerable: true,
  },

  model: {
    value: "Ford",
    enumerable: true,
  },
});

console.log("car", car);

export {};
