function PriorityQueue() {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };
  this.enqueue = function(element) {
    this.collection = [...this.collection, element];
  };
  this.dequeue = function() {
    let next = this.front();
    let topPriority = next[1];
    this.collection.forEach((element, idx) => {
      const priority = element[1];
      if (priority < topPriority) {
        next = element;
        topPriority = priority;
      }
    });
    this.collection.splice(this.collection.indexOf(next), 1);
    return next[0];
  };
  this.size = function() {
    return this.collection.length;
  };
  this.front = function() {
    return this.collection[0];
  };
  this.isEmpty = function() {
    return this.collection.length === 0;
  };
}

///////////////////////////////////////////////////////////////////////

let p = new PriorityQueue();

p.enqueue(["A", 5]);
p.enqueue(["B", 5]);
p.enqueue(["C", 5]);
p.enqueue(["D", 3]);
p.enqueue(["E", 1]);
p.enqueue(["F", 7]);

let dequeueOrder = "";

for (let i = 0; i < 6; i++) {
  dequeueOrder += p.dequeue();
}

console.log(dequeueOrder === "EDABCF");
