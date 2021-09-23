var Stack = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function (value) {
    storage[Object.keys(storage).length] = value;
    return storage;

  };

  someInstance.pop = function () {
    var newStorage = {};
    for (var i = 0; i < Object.keys(storage).length; i++) {
      if (i === Object.keys(storage).length - 1) {
        var popped = storage[i];
        storage = newStorage;
        return popped;
      }
      newStorage[i] = storage[i];
    }

  };

  someInstance.size = function () {
    return Object.keys(storage).length;
  };

  return someInstance;
};
