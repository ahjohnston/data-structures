var Queue = function () {
  var queueMaker = {};
  queueMaker.length = 0;
  queueMaker.dequeued = undefined;
  _.extend(queueMaker, queueMethods);
  return queueMaker;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  //add the enqueued value at the "end" of the object
  // console.log('pre-enq', this);
  this[this.length] = value;
  this.length++;
  // console.log('post-enq', this);
  return this;
};

queueMethods.dequeue = function () {
  //dequeue the item at index [0] and return it
  console.log('pre-dq ', this);
  if (this.length > 0) {
    this.dequeued = this[0];
    this.length--;
  }

  for (var i = 0; i < this.length - 1; i ++) {

    this[i] = this[i + 1];
  }
  delete this[this.length];
  // for (var key in this) {
  //   if (key < this.length) {
  //     console.log('test ', key, this);
  //     this[key] = this[key + 1];
  //   } else {
  //     delete this[key];
  //   }
  // }
  console.log('post-dq', this);
  return this.dequeued;
};

queueMethods.size = function () {
  return this.length;
};


//justify: create an object that contains queue, dequeue, and size methods that can be used on an object
//specify
////input: original object
////output: queue & dequeue will modify the object and return the queued/dequeued value; size will return a number
////constraints:

//explain: every time we call the "Queue" function, the new Queue will automatically be equipped with the push, pop, and size methods FROM THE STACK METHODS OBJECT. (as opposed to our FUNCTIONAL strategy, wherein the methods were defined within the stack function itself)