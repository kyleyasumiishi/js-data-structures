const Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};

const DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  this.length = 0

  this.print = function() {
    const elements = [];
    let currentElement = this.head;
    while (currentElement) {
      elements.push(currentElement.data);
      currentElement = currentElement.next;
    }
    return elements;
  }

  // Add given element to list
  this.add = function(element) {

    const node = new Node(element, null);
    if (this.length > 0) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }

    this.length++;

    return node;

  }

  // Remove all occurrences of given element in list
  this.remove = function(element) {

    if (this.head === null) {
      return null;
    } else if (this.tail === null && this.head.data === element) {
      this.head = null;
    } else {
      let currentElement = this.head;
      let prevElement = null;
      while (currentElement.next) {
        if (currentElement.next.data === element) {
          prevElement.next = currentElement.next.next;
        } else {
          prevElement = currentElement;
          currentElement = currentElement.next;
        }
      }
    }
  }

};


const test = new DoublyLinkedList();

console.log(test.add(5));
console.log(test.add(6));

module.exports = DoublyLinkedList;