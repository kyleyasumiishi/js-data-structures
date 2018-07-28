function Set() {
  // the var collection will hold our set
  var collection = [];
  // this method will check for the presence of an element and return true or false
  this.has = function(element) {
    return (collection.indexOf(element) !== -1);
  };
  // this method will return all the values in the set
  this.values = function() {
    return collection;
  };
  // this method will add an element to the set
  this.add = function(element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };
  // this method will remove an element from the set
  this.remove = function(element) {
    if (this.has(element)) {
      const idx = collection.indexOf(element);
      collection.splice(idx, 1);
      return true;
    }
    return false;
  };
  // this method should return the size of the collection
  this.size = function() {
    return collection.length;
  }
  // this method should take another Set as an argument and return the union of the two sets, excluding any duplicate values
  this.union = function(set) {
    const unionSet = new Set();
    collection.forEach(member => {
        unionSet.add(member);
    });
    set.values().forEach(member => {
        if (!unionSet.has(member)) {
            unionSet.add(member);
        };
    });
    return unionSet;
  }
  // this method should take another Set as an argument and return the intersection of the two sets
  this.intersection = function(set) {
    const intersectionSet = new Set();
    collection.forEach(memberSetA => {
      set.values().forEach(memberSetB => {
        if (memberSetA === memberSetB) {
          intersectionSet.add(memberA);
        };
      }); 
    });
    return intersectionSet;
  }
  // this method should take another Set as an argument an return the difference of the two sets
  this.difference = function(set) {
    const differenceSet = new Set();
    collection.forEach(memberSetA => {
      let isAbsentInSetB = true;
      set.values().forEach(memberSetB => {
        if (memberSetA === memberSetB) {
          isAbsentInSetB = false;
        };
      });
      if (isAbsentInSetB) {
        differenceSet.add(memberSetA);
      };
    });
    return differenceSet;
  }
  // this method will compare this set against another set and return true if it's fully contained in the other set and false otherwise
  this.subset = function(set) {
    collection.forEach(member => {
      if (!set.has(member)) {
        return false;
      };
    });
    return true;
  }
}