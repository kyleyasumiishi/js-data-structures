const displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;

  this.findMin = function() {
    if (this.root === null) { return null; }
    let parent = this.root;
    let min = this.root.value;
    while (parent.left) {
      parent = parent.left;
      min = parent.value;
    }
    return min;
  };

  this.findMax = function() {
    if (this.root === null) { return null; }
    let parent = this.root;
    let max = this.root.value;
    while (parent.right) {
      parent = parent.right;
      max = parent.value;
    }
    return max;
  };

  this.add = function(num) {
    function add(num, tree) {
      // base case
      if (num === tree.value) {
        return null;
      } else if (num < tree.value) {
        if (tree.left === null) {
          tree.left = new Node(num);
          return;
        } else {
          return add(num, tree.left);
        }
      } else {
        if (tree.right === null) {
          tree.right = new Node(num);
          return;
        } else {
          return add(num, tree.right);
        }
      }
    }
    
    if (this.root === null) {
      this.root = new Node(num);
      return;
    } else {
      return add(num, this.root);
    }
    
  } 
}

//////////////////////////////

const test = new BinarySearchTree();
test.add(4);
test.add(1);
test.add(7);
test.add(87);
test.add(34);
test.add(45);
test.add(73);
test.add(8);
console.log(displayTree(test))