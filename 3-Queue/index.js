const Deque = require('./Deque');
const Queue = require('./Queue');

// ---------------------- Fila - Queue ---------------------- //

const queue = new Queue();

console.log('1 - ', queue.isEmpty());

queue.enqueue('John');
queue.enqueue('Jack');
console.log('2 - ', queue.toString());

console.log('3 - ', queue.size());
console.log('4 - ', queue.isEmpty());

queue.dequeue();
queue.dequeue();
console.log('5 - ', queue.toString());

console.log('  ');
console.log('  ');
console.log('  ');

// ---------------------- Deque ---------------------- //

const deque = new Deque();

console.log('1 - ', deque.isEmpty());

deque.addBack('John');
deque.addBack('Jack');
console.log('2 - ', deque.toString());

deque.addBack('Camila');
console.log('3 - ', deque.toString());

console.log('4 - ', deque.size()); 
console.log('5 - ', deque.isEmpty()); 

deque.removeFront();
console.log('6 - ', deque.toString());

deque.removeBack();
console.log('7 - ', deque.toString());

deque.addFront('John');
console.log('8 - ', deque.toString());