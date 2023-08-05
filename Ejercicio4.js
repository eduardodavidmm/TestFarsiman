let diagSum = 0;

const array = [
    [17, 9, 36, 21],
    [8, 28, 3, 1],
    [15, 7, 5, 30],
    [10, 27, 4, 12]
];

for (let i = 0; i < array.length; i++) {
    diagSum += array[i][i];
}

console.log(`La Suma de la diagonal es: ${diagSum}`);