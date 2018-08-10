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

  this.isPresent = function(num) {
    function checkIfPresent(num, tree) {
      if (num === tree.value) {
        return true;
      } else if (num < tree.value) {
        if (tree.left === null) {
          return false;
        } else {
          return checkIfPresent(num, tree.left);
        }
      } else {
        if (tree.right === null) {
          return false;
        } else {
          return checkIfPresent(num, tree.right);
        }
      }
    }
    return this.root !== null ? checkIfPresent(num, this.root) : false;
  }

  this.findMinHeight = function() {
    function findMin(tree, count) {
      if (tree.left === null && tree.right === null) {
        return count;
      } else if (tree.left !== null && tree.right !== null) {
        return Math.min(findMin(tree.left, count + 1), findMin(tree.right, count + 1));
      } else if (tree.left !== null) {
        return findMin(tree.left, count + 1);
      } else {
        return findMin(tree.right, count + 1);
      }
    }
    return this.root !== null ? findMin(this.root, 0) : -1;
  }

  this.findMaxHeight = function() {
    function findMax(tree, count) {
      if (tree.left === null && tree.right === null) {
        return count;
      } else if (tree.left !== null && tree.right !== null) {
        return Math.max(findMax(tree.left, count + 1), findMax(tree.right, count + 1));
      } else if (tree.left !== null) {
        return findMax(tree.left, count + 1);
      } else {
        return findMax(tree.right, count + 1)
      }
    }
    return this.root !== null ? findMax(this.root, 0) : -1;
  }

  this.isBalanced = function() {
    return this.findMaxHeight() - this.findMinHeight() <= 1 ? true : false;
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