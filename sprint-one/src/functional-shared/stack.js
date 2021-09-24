
var Stack = function () {
  //create an empty object called stackMaker
  var stackMaker = {};
  stackMaker.length = 0;

  //use extend to add the stackMethods object to the stackmaker object
  _.extend(stackMaker, stackMethods);
  //return stackmaker
  return stackMaker;

};

stackMethods = {};

//add methods to stackMethods

//stackMethods.push(value)
////adds the input value to the end of the "object created by the Stack function"
////this.size refers to the size of (which?) object
////key = index, which would be this.size. value = use the input value
stackMethods.push = function (value) {
  var pushedIndex = this.length;
  this[pushedIndex] = value;
  this.length++;
  return this;

};

//stackMethods.pop()
////removes the last key/value (use delete [object].[key] ?)
////returns the popped value
stackMethods.pop = function () {
  var lastIndex = this.length - 1;
  // console.log('this ', this);
  var popped = this[lastIndex];
  // console.log('popped ', popped);
  delete this.lastIndex;
  if (this.length > 0) {
    this.length--;
  }
  return popped;
};


//returns the length of the Object.keys array
stackMethods.size = function () {
  return this.length;
};

var newStack = Stack();
newStack.push('a');
// console.log('pop ', newStack.pop());



//justify: create an object that contains push, pop, and size methods that can be used on an object
//specify
////input: original object
////output: push & pop will modify the object and return the push/popped value; size will return a number
////constraints:

//explain: every time we call the "Stack" function, the new Stack will automatically be equipped with the push, pop, and size methods FROM THE STACK METHODS OBJECT. (as opposed to our FUNCTIONAL strategy, wherein the methods were defined within the stack function itself)