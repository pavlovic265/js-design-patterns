const vehiclePrototype = {
  init: function (carModel) {
    this.model = carModel;
  },

  getModel: function () {
    console.log("The model of this vehicle is.." + this.model);
  },
};

function vehicle(model) {
  function F() {}
  F.prototype = vehiclePrototype;

  const f = new F();

  f.init(model);
  return f;
}

const beget = (function () {
  function F() {}

  return function (proto) {
    F.prototype = proto;
    return new F();
  };
})();

const car = vehicle("Ford Escort");
car.getModel();
console.log("beget", beget);
