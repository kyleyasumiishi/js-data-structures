const LinkedList = require("../data-structures/linked-list");

describe("LinkedList", () => {
  it("should have a add method", () => {
    const test = new LinkedList();
    expect(typeof test.add).toBe("function");
  });
  it("should assign head to the first node added", () => {
    const test = new LinkedList();
    test.add("cat");
    expect(test.head().element).toEqual("cat");
  });
  it("The previous node should have a reference to the newest node", () => {
    const test = new LinkedList();
    test.add("cat");
    test.add("dog");
    expect(test.head().next.element).toEqual("dog");
  });
  it("the size of the LinkedList class should equal the amount of nodes in the linked list", () => {
    const test = new LinkedList();
    test.add("cat");
    test.add("dog");
    expect(test.size()).toEqual(2);
  });
  it("should have a remove method", () => {
    const test = new LinkedList();
    expect(typeof test.remove).toBe("function");
  });
  it("should decrease the length of the linked list by one for every node removed", () => {
    const test = new LinkedList();
    test.add("cat");
    test.add("dog");
    test.remove("cat");
    expect(test.size()).toEqual(1);
  });
  it("should reassign head to the second node when the first node is removed", () => {
    const test = new LinkedList();
    test.add("cat");
    test.add("dog");
    test.remove("cat");
    expect(test.head().element).toEqual("dog");
  });
  it("should reassign the reference of the previous node of the removed node to the removed node's next reference", () => {
    const test = new LinkedList();
    test.add("cat");
    test.add("dog");
    test.add("bear");
    test.remove("dog");
    expect(test.head().next.element).toEqual("bear");
  });
  it("the size method should return the length of the linked list", () => {
    const test = new LinkedList();
    test.add("cat");
    test.add("dog");
    test.add("kitten");
    expect(test.size()).toBe(3);
  });
  it("the indexOf method should return the index of the given element", () => {
    const test = new LinkedList();
    test.add("cat");
    test.add("dog");
    test.add("kitten");
    expect(test.indexOf("kitten")).toBe(2);
  });
  it("the elementAt method should return the element at a given index", () => {
    const test = new LinkedList();
    test.add("cat");
    test.add("dog");
    test.add("kitten");
    expect(test.elementAt(1)).toBe("dog");
  });
  it("the removeAt method should reduce the length of the linked list", () => {
    const test = new LinkedList();
    test.add("cat");
    test.add("dog");
    test.add("kitten");
    test.removeAt(1);
    expect(test.size()).toBe(2);
  });
  it("the removeAt method should return the element of the removed node", () => {
    const test = new LinkedList();
    test.add("cat");
    test.add("dog");
    test.add("kitten");
    expect(test.removeAt(1)).toBe("dog");
  });
  it("the removeAt method should return null if the given index is less than 0", () => {
    const test = new LinkedList();
    test.add("cat");
    test.add("dog");
    test.add("kitten");
    expect(test.removeAt(-1)).toBe(null);
  });
  it("the removeAt method should return null if the given index is equal or more than the length of the linked list", () => {
    const test = new LinkedList();
    test.add("cat");
    test.add("dog");
    test.add("kitten");
    expect(test.removeAt(3)).toBe(null);
  });
});