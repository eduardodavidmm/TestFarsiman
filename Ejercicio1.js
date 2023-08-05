//Eduardo David Maldonado Aguilar

//Declaracion de Variables de la matriz
const arrayOne = [
  [17, 9, 36],
  [8, 7, 3],
  [15, 28, 87]
];

const arrayTwo = [
  [9, 21, 36],
  [16, 65, 4],
  [12, 28, 31]
];


//Ciclo For
function compMatrix(arrayOne, arrayTwo) {
  let topOne = 0;
  let topTwo = 0;
  let equals = 0;

  for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
          if (arrayOne[i][j] > arrayTwo[i][j]) {
              topOne++;
          } else if (arrayTwo[i][j] > arrayOne[i][j]) {
              topTwo++;
          } else {
              equals++;
          }
      }
  }

  return [topOne, topTwo, equals];
}

//Console Log de Resultados
const [topOne, topTwo, equals] = compMatrix(arrayOne, arrayTwo);

console.log(`El arreglo 1 contiene ${topOne} elementos mayores`);

console.log(`El arreglo 1 contiene ${topTwo} elementos mayores`);

console.log(`Existen ${equals} elementos iguales en ambos arreglos`);