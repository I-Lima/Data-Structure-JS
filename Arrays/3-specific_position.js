// ------------ Adicionando e Removendo de uma Posição Específica - Adding and Removing from a Specific Position ------------ //

// ----- Removendo um elemento - Removing an Element
let numberRemove = [-3, -2, -1, 0, 1, 2, 3];

// Remove 3 elementos a partir do índice 5
//
numberRemove.splice(5,2);
console.log('1 - ', numberRemove);

// ----- Adding um elemento - Adding an Element
let numberAdd = [-3, -2, -1, 0, 1, 2, 3];
numberAdd.splice(4, 0, 4, 5, 6);
console.log('2 - ', numberAdd);