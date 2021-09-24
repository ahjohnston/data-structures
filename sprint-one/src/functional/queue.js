var Queue = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function (value) {
    //add the new value at key 0; bump down all other key/values
    var newStorage = {};
    newStorage[0] = value;
    // console.log('newS ', newStorage);
    for (var i = 0; i < Object.keys(storage).length; i++) {
      newStorage[i + 1] = storage[i];
      // console.log('newStorage i + 1 ', newStorage[i + 1]);
      // console.log('storage[i] ', storage[i]);
    }
    storage = newStorage;
    // console.log('enqueue result ', storage);
    // console.log('newStorage ', newStorage);
    return storage;
  };

  //problem: whenever enqueue() is invoked, the enqueued value populates as .dequeue
  //problem! whenever enqueue() is invoked, the previously dequeued item is forgotten and is now undefined. Why?
  someInstance.dequeue = function () {
    //remove the last key/value
    var dequeued = storage[Object.keys(storage).length - 1];
    delete storage[Object.keys(storage).length - 1];
    return dequeued;
    // var newStorage = {};

    // for (var key in storage) {
    //   if (Object.keys(newStorage).length === Object.keys(storage).length - 1) {
    //     var dequeued = storage[key];
    //     storage = newStorage;
    //     // console.log('fdq', dequeued);
    //     return dequeued;
    //   }
    //   newStorage.key = storage.key;
    // }
  };

  someInstance.size = function () {
    //return the length of the Object.keys array
    return Object.keys(storage).length;
  };

  return someInstance;
};
