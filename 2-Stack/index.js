const Stack = require("./stack");
const StackArray = require("./stack-array");

// ---------------------- Com Array - With Array ---------------------- //
console.time('STACK WITH ARRAY');
const stack = new StackArray();
console.log('1 - Empty', stack.isEmpty());

stack.push(5);
stack.push(8);

console.log('2 - ', stack.peek());

stack.push(11);
console.log('3 - ', stack.size());
console.log('4 - ', stack.isEmpty());

console.log('5 -', stack.pop());
console.log('6 - ', stack.size());

console.log('7 - ', stack.toString());
stack.clear();

console.timeEnd('STACK WITH ARRAY');

// ---------------------- Com Objeto - With Object ---------------------- //
console.time('STACK WITH OBJECT');
const stack2 = new Stack();
console.log('1 - Empty', stack2.isEmpty());

stack2.push(5);
stack2.push(8);

console.log('2 - ', stack2.peek());

stack2.push(11);
console.log('3 - ', stack2.size());
console.log('4 - ', stack2.isEmpty());

console.log('5 -', stack2.pop());
console.log('6 - ', stack2.size());

console.log('7 - ', stack2.toString());
stack2.clear();

console.timeEnd('STACK WITH OBJECT');