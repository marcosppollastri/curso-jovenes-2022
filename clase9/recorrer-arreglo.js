const { randomInt } = require('../lib/random');

let notas = [];

// console.log(notas);

for(let i = 0; i < 10; i++){
    notas[i] = randomInt(10) + 1;
}

let sum = 0;

for(let i = 0; i < notas.length; i++){
    sum += notas[i];
}

console.log(sum);
console.log(notas);
