const array = [
    [17, 9, 36],
    [8, 7, 3],
    [15, 28, 57]
];

const numbers = array.flat();
numbers.sort((a, b) => a - b);

const half = Math.floor(numbers.length / 2);
let media;

if (numbers.length % 2 === 0) {
    media = (numbers[half - 1] + numbers[half]) / 2;
} else {
    media = numbers[half];
}

console.log("Matriz Ordenada:", numbers);
console.log("Media:", media);