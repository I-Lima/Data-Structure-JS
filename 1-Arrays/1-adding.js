// -------------- Inserindo Elementos - Adding Elements -------------- //

// ----- Inserindo ao Final - Appending at the End
let numberArrayStart = [1,2];
numberArrayStart[numberArrayStart.length] = 3;
console.log('1 - ', numberArrayStart);

// Ou - Or
numberArrayStart.push(4);
console.log('2 - ', numberArrayStart);

// ----- Inserindo na primeira posição - Adding at the First Position
let numberArrayEnd = [];
Array.prototype.insertFirstPosition = function(value) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }
    this[0] = value;
};
numberArrayEnd.insertFirstPosition(-1);
console.log('3 - ', numberArrayEnd);

// Ou - Or
numberArrayEnd.unshift(-2);
console.log('4 - ', numberArrayEnd);
