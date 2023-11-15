// ------------ Arrays Multidimensionais - Multidimensional Arrays ------------ //
const matrix3x3x3 = [];
for (let i = 0; i < 3; i++) {
  matrix3x3x3[i] = []; 
  for (let j = 0; j < 3; j++) {
    matrix3x3x3[i][j] = [];
    for (let z = 0; z < 3; z++) {
      matrix3x3x3[i][j][z] = i + j + z;
    }
  }
}

function printMatrix(myMatrix) {
  for (let i = 0; i < myMatrix.length; i++) {
    for (let j = 0; j < myMatrix[i].length; j++) {
     for (let z = 0; z < myMatrix[i][j].length; z++) {
      console.log(myMatrix[i][j][z]);
     }
    }
  }
}
printMatrix(matrix3x3x3);

console.table(matrix3x3x3)