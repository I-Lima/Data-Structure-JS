// ------------ Classe TypedArray - TypedArray Class ------------ //
let length = 5;
let int16 = new Int16Array(length);

for (let i=0; i<length; i++){
  int16[i] = i+1;
}
console.log(int16);