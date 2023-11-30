const Set = require("./src/Set");

const set1 = new Set();
console.log('1 - ',set1.size());

set1.add(1);
set1.add(4);
set1.add(5);
set1.add(10);

console.log('2 - ', set1.values());
console.log('3 - ',set1.has(1));
console.log('4 - ',set1.size()); 

set1.delete(1);

console.log('5 - ',set1.values());
console.log('6 - ',set1.has(1));
console.log('6 - ',set1.size());

const set2 = new Set();
set2.add(3);
set2.add(4);
set2.add(12);

console.log('7 - ', set1.union(set2).values());
console.log('8 - ', set1.intersection(set2).values());
console.log('9 - ', set1.difference(set2).values());
console.log('10 - ', set1.isSubsetOf(set2));