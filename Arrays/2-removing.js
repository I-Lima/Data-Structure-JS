// -------------- Removendo Elementos - Removing Elements -------------- //

// ----- Removendo um elemento final - Removing an Element from the End
let numberEnd = [1, 2];
numberEnd.pop()
console.log('1 - ', numberEnd);

// ----- Removendo um elemento da primeira posição - Removing an Element from the First Position
let numberStart = [1, 2, 3];
Array.prototype.reIndex = function(myArray) {
  const newArray = [];

  for(let i = 0; i < myArray.length; i++ ) {
    if (myArray[i] !== undefined) {
      newArray.push(myArray[i]);
    }
  }

  return newArray;
}

Array.prototype.removeFirstPosition = function() {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }

  return this.reIndex(this);
}
console.log('2 - ', numberStart.removeFirstPosition());

// Ou - Or
numberStart.shift();
console.log('3 - ', numberStart);