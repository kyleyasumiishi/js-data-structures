let called = 0;
const hashFunction = (string) => {
  called++;
  let hash = 0;
  for (let i = 0; i < string.length; i++) { 
    hash += string.charCodeAt(i); 
  }
  return hash;
};

const HashTable = function() {
  
  this.collection = {};

  this.add = function(key, value) {
    const hash = hashFunction(key);
    if (this.collection[hash]) {
      this.collection[hash].push([key, value]);
    } else {
      this.collection[hash] = [[key, value]];
    }
  }

  this.remove = function(key) {
    const hash = hashFunction(key);
    if (this.collection[hash].length > 1) {
      this.collection[hash] = this.collection[hash].filter(([k, v]) => {
        k !== key;
      });
    } else {
      delete this.collection[hash];
    }
  }

  this.lookup = function(key) {
    const hash = hashFunction(key);
    if (this.collection[hash]) {
      for (let [k, v] of this.collection[hash]) {
        if (key === k) { return v; };
      }
    } else {
      return null;
    }
  }
};

