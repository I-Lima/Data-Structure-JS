const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
};

function defaultEquals(a, b) {
  return a === b;
}

function defaultCompare(a, b) {
  if (a === b) return Compare.EQUALS;
  
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

module.exports = {defaultEquals, defaultCompare, Compare};