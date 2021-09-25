var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    //make current tail point to new tail
    //change "tail" marker to the new tail
  };

  list.removeHead = function () {
    //change "head" marker to the value that the current head points to
    //remove pointer from current head
  };

  list.contains = function (target) {
  };

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
