const Map = function() {
  this.collection = {};
  this.add = function(key, value) {
    this.collection[key] = value;
  };
  this.remove = function(key) {
    delete this.collection[key];
  };
  this.get = function(key) {
    return this.collection[key];
  };
  this.has = function(key) {
    return this.collection.hasOwnProperty(key);
  };
  this.values = function() {
    return Object.values(this.collection);
  };
  this.size = function() {
    return Object.getOwnPropertyNames(this.collection).length;
  };
  this.clear = function() {
    const keys = Object.getOwnPropertyNames(this.collection);
    keys.forEach(key => {
        this.remove(key);
    });
  };
};
