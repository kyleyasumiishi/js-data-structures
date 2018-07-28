const CircularQueue = require("../data-structures/circular-queue");

describe("CircularQueue", () => {
  it("the enqueue method adds items to the circular queue", () => {
    const test = new CircularQueue(3);
    test.enqueue(17);
    test.enqueue(32);
    test.enqueue(591);
    const print = test.print();
    expect(print[0] === 17 && print[1] === 32 && print[2] === 591).toBeTruthy();
  });
  it("you cannot enqueue items past the read pointer", () => {
    const test = new CircularQueue(3);
    test.enqueue(17);
    test.enqueue(32);
    test.enqueue(591);
    test.enqueue(13);
    test.enqueue(25);
    test.enqueue(59);
    const print = test.print();
    expect(print[0] === 17 && print[1] === 32 && print[2] === 591).toBeTruthy();
    expect(print.length === 3).toBeTruthy();
  });
  it("the dequeue method dequeues items from the queue", () => {
    const test = new CircularQueue(3);
    test.enqueue(17);
    test.enqueue(32);
    test.enqueue(591);
    expect(
      test.dequeue() === 17 && test.dequeue() === 32 && test.dequeue() === 591
    ).toBeTruthy();
  });
  it("after an item is dequeued its position in the queue should be reset to null", () => {
    const test = new CircularQueue(3);
    test.enqueue(17);
    test.enqueue(32);
    test.enqueue(672);
    test.dequeue();
    test.dequeue();
    const print = test.print();
    expect(
      print[0] === null && print[1] === null && print[2] === 672
    ).toBeTruthy();
  });
  it("trying to dequeue past the write pointer returns null and does not advance the write pointer", () => {
    const test = new CircularQueue(3);
    test.enqueue(17);
    test.enqueue(32);
    test.enqueue(591);
    expect(
      test.dequeue() === 17 &&
        test.dequeue() === 32 &&
        test.dequeue() === 591 &&
        test.dequeue() === null &&
        test.dequeue() === null &&
        test.dequeue() === null &&
        test.dequeue() === null &&
        test.enqueue(100) === 100 &&
        test.dequeue() === 100
    ).toBeTruthy();
  });
});
