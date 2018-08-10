const BinarySearchTree = require("../data-structures/binary-search-tree");
/*
text: "The add method adds elements according to the binary search tree rules.",
                            testString: "assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.add !== 'function') { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); return (test.isBinarySearchTree()); })(), 'The add method adds elements according to the binary search tree rules.');"
                        }, {
*/
describe("BinarySearchTree", () => {
  it("the add method adds elements according to the binary search tree rules", () => {
    let test = false;
    if (typeof BinarySearchTree() !== "undefined") {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.add !== "function") { return false; }
    test.add(4);
    test.add(1);
    test.add(7);
    test.add(87);
    test.add(34);
    test.add(45);
    test.add(73);
    test.add(8);
  })
})