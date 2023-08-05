//Inicializacion de valoress

let totalSum = 0;
let totalNums = 0;

const arrayTest = [
    [17, 9, 36],
    [8, 7, 3],
    [15, 28, 57]
];

for (let i = 0; i < arrayTest.length; i++) {
    for (let j = 0; j < arrayTest[i].length; j++) {
        totalSum += arrayTest[i][j];
        totalNums++;
    }
}

const totalProm = totalSum / totalNums;

const porcentage = 0.6;
const numsApply = [];
const numsNoApply = [];

for (let i = 0; i < arrayTest.length; i++) {
    for (let j = 0; j < arrayTest[i].length; j++) {
        const numValue = arrayTest[i][j];
        const numDif = Math.abs(numValue - totalProm);
        const numLimit = totalProm * porcentage;

        if (numDif <= numLimit) {
            numsApply.push(numValue);
        } else {
            numsNoApply.push(numValue);
        }
    }
}

let sumaAplican = 0;
for (const numValue of numsApply) {
    sumaAplican += numValue;
}

console.log(`La suma es: ${sumaAplican}`);

console.log(`El promedio de suma es: ${totalProm}`);

//Se imprimen en diferente orden al del ejercicio expuesto porque el ciclo for empieza de 0 pero el resultado es el mismo

//Para ordenar el output el ejemplo es el ejercicio 3
console.log(`No aplican para sumar: ${numsNoApply.join(', ')}`);

console.log(`Si aplican para sumar: ${numsApply.join(', ')}`);