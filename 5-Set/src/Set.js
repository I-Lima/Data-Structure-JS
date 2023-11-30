class Set {
  constructor() {
   this.items = {};
  }

  has(element){
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  add(element) {
    if (!this.has(element)) {
     this.items[element] = element;
     return true;
    }

    return false;
  }

  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }

    return false;
  }

  size() {
    return Object.keys(this.items).length;
  }

  clear() {
    this.items = {};
  }

  values() {
    return Object.values(this.items)
  }

  union(otherSet) {
    const unionSet = new Set();

    this.values().forEach(value => unionSet.add(value));
    otherSet.values().forEach(value => unionSet.add(value));

    return unionSet;
  }

  intersection(otherValues) {
    const intersectionSet = new Set();
    const values = this.values();
    let biggerSet = values;
    let smallerSet = otherValues;

    if (otherValues.length - values.length > 0) {
      biggerSet = otherValues;
      smallerSet = values;
    }

    smallerSet.values().forEach((values) => {
      if (biggerSet.includes(values)) 
        intersectionSet.add(values);
    });

    return intersectionSet;
  }

  difference(otherSet) {
    const differenceSet = new Set();

    this.values().forEach(value => {
      if (!otherSet.has(value))
       differenceSet.add(value);
    });

    return differenceSet;
  }

  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) return false;

    let isSubset = true;
    this.values().every(value => {
      if (!otherSet.has(value)) {
        isSubset = false;
        return false;
      }

      return true;
    });

    return isSubset;
  }
}

module.exports = Set;