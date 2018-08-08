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
}