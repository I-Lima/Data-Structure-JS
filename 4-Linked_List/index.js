const DoublyLinkedList = require("./src/DoublyLinkedList");
const LinkedList = require("./src/LinkedList");
const CircularLinkedList = require("./src/CircularLinkedList");
const SortedLinkedList = require("./src/SortedLinkedList");

// ---------------------- Lista Encadeada - Linked List ---------------------- //

const list = new LinkedList();
console.log('1 - ', list.isEmpty());

list.push(15);
list.push(10);
list.push(1);
list.push(8);

console.log('2 - ', list.toString());
console.log('3 - ', list.size());

list.removeAt(2);
console.log('4 - ', list.toString());

console.log('5 - ', list.getElementAt(1));

list.insert(2, 1);
console.log('6 - ', list.toString());

console.log('7 - ', list.indexOf(8));

list.remove(8);
console.log('8 - ', list.toString());

console.log('9 - ', list.getHead());

console.log('');
console.log('');
console.log('');

// ---------------------- Lista Duplamente Encadeada - Double-Linked List ---------------------- //

const list2 = new DoublyLinkedList();
console.log('1 - ', list2.isEmpty());

list2.push(12);
list2.push(20);
list2.push(8);
list2.push(33);

console.log('2 - ', list2.toString());
console.log('3 - ', list2.size());

list2.removeAt(2);
console.log('4 - ', list2.toString());

console.log('5 - ', list2.getElementAt(1));

list2.insert(2, 1);
console.log('6 - ', list2.toString());

console.log('7 - ', list2.indexOf(8));

list2.remove(8);
console.log('8 - ', list2.toString());

console.log('9 - ', list2.getHead());

console.log('');
console.log('');
console.log('');

// ---------------------- Lista Encadeada Circular - Circular Linked List ---------------------- //

const list3 = new CircularLinkedList();
console.log('1 - ', list3.isEmpty());

list3.push(43);
list3.push(50);
list3.push(100);
list3.push(1);

console.log('2 - ', list3.toString());
console.log('3 - ', list3.size());

list3.removeAt(2);
console.log('4 - ', list3.toString());

console.log('5 - ', list3.getElementAt(1));

list3.insert(2, 1);
console.log('6 - ', list3.toString());

console.log('7 - ', list3.indexOf(8));

list3.remove(8);
console.log('8 - ', list3.toString());

console.log('9 - ', list3.getHead());

console.log('');
console.log('');
console.log('');

// ---------------------- Lista Encadeada Ordenada - Sorted Linked List ---------------------- //

const list4 = new SortedLinkedList();
console.log('1 - ', list4.isEmpty());

list4.push(43);
list4.push(50);
list4.push(100);
list4.push(1);

console.log('2 - ', list4.toString());
console.log('3 - ', list4.size());

list4.removeAt(2);
console.log('4 - ', list4.toString());

console.log('5 - ', list4.getElementAt(1));

list4.insert(2, 1);
console.log('6 - ', list4.toString());

console.log('7 - ', list4.indexOf(8));

list4.remove(8);
console.log('8 - ', list4.toString());

console.log('9 - ', list4.getHead());