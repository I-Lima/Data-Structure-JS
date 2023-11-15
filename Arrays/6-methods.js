// ------------ Arrays Multidimensionais - Multidimensional Arrays ------------ //

// ----- Junção - Concatenation
const zero = 0;
const positiveNumbers = [1, 2, 3];
const negativeNumbers = [-3, -2, -1];
let numbers = negativeNumbers.concat(zero, positiveNumbers);

console.log('1 - ', numbers);

// ----- Iteração - Iteration
// Every
let outputEvery = numbers.every((value) => value % 2 === 0);
console.log('2 - ', outputEvery);

// Some
let outputSome = numbers.some((value) => value % 2 === 0);
console.log('3 - ', outputSome);

// forEach
numbers.forEach((value) => console.log(value % 2 === 0));

// map
let outputMap = numbers.map((value) => value % 2 === 0);
console.log('5 - ', outputMap);

// filter
let outputFilter = numbers.filter((value) => value % 2 === 0);
console.log('6 - ', outputFilter);

// Reducer
let outputReducer = numbers.reduce((previous, current) => previous+current);
console.log('7 - ', outputReducer);

// ----- Ordenando Elementos - Sorting Elements
// Reverse
let outputReverse = numbers.reverse();
console.log('8 - ', outputReverse);

// Sort
let outputSort = numbers.sort();
console.log('9 - ', outputSort);

// Custom
let outputCustom = numbers.sort((a, b) => a-b);
console.log('10 - ', outputCustom);
let outputCustom2 = numbers.sort((a, b) => b-a);
console.log('11 - ', outputCustom2);