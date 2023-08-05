const readline = require('readline');

const inputrl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

inputrl.question('Texto: ', (textInsert) => {
    
    const reverseText = textInsert.split('').reverse().join('');
    console.log(`Cadena invertida: ${reverseText}`);
    inputrl.close();
});