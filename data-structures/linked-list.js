function LinkedList() {
  let length = 0;
  let head = null;

  const Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.head = function() {
    return head;
  };

  this.size = function() {
    return length;
  };

  this.add = function(element) {
    if (this.size() === 0) {
      head = new Node(element);
    } else {

      // function lastNode(node, element) {
      //   if (node.next === null) {
      //     node.next = new Node(element);
      //   } else {
      //     lastNode(node.next, element);
      //   }
      // }

      // lastNode(head, element);

      let currentNode = head;

      while(currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = new Node(element);

    };
    length++;
  };

  this.remove = function(element) {
    if (this.head().element === element) {
      head = this.head().next;
    } else {
      let currentNode = head;
      do {
        if (currentNode.next.element === element) {
          currentNode.next = currentNode.next.next;
          break;
        }
        currentNode = currentNode.next
      } while (currentNode.next);
    }
    length--;
  };

  this.isEmpty = function() {
    return length === 0;
  };

  this.indexOf = function(element) {
    let isFound = false;
    let idx = 0;
    let currentNode = head;
    while (currentNode !== null) {
      if (currentNode.element === element) {
        isFound = true;
        break;
      } else {
        idx++;
        currentNode = currentNode.next;
      }
    }
    return isFound ? idx : -1;
  };

  this.elementAt = function(index) {
    let count = 0;
    let element;
    let currentNode = head;
    while (count <= index) {
      if (count === index && currentNode !== null) {
        element = currentNode.element;
        break;
      } else {
        count++;
        currentNode = currentNode.next;
      }
    }
    return element;
  };

  this.removeAt = function(index) {
    let currentIndex = 0;
    let currentElement = head;

    if (index < 0 || index >= this.size()) { return null };

    while (currentIndex <= index) {
      if (currentIndex === index) {
        this.remove(currentElement);
        break;
      } else {
        currentIndex++;
        currentElement = currentElement.next;
      }
    }
    return currentElement.element;
  }
}

const test = new LinkedList();
test.add("cat");
test.add("dog");
test.add("kitten");
console.log(test.indexOf("kitten"));

module.exports = LinkedList;