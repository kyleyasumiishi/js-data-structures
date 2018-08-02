const DoublyLinkedList = require("../data-structures/doubly-linked-list");

describe("DoublyLinkedList", () => {
  it("the add method adds items to the list", () => {
    const test = new DoublyLinkedList();
    test.add(5);
    test.add(6);
    test.add(723);
    expect(test.print().join("")).toEqual("56723");
  });
});