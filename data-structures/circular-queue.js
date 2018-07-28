class CircularQueue {
  constructor(size) {
    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    if (this.write <= this.read + this.max) {
      const idx = this.write % (this.max + 1);
      this.queue[idx] = item;
      this.write++;
      return item;
    }
    return null;
  }

  dequeue() {
    if (this.read < this.write) {
      const idx = this.read % (this.max + 1);
      const removed = this.queue[idx];
      this.queue.splice(idx, 1, null);
      this.read++;
      return removed;
    }
    return null;
  }
}

module.exports = CircularQueue;
