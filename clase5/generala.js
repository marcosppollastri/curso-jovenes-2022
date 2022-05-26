var random = require('../lib/random');

var dado1, dado2, dado3, dado4, dado5;
var flag = false;
var contador = 0;

while(flag === false){
    dado1 = random.randomInt(6)+1;
    dado2 = random.randomInt(6)+1;
    dado3 = random.randomInt(6)+1;
    dado4 = random.randomInt(6)+1;
    dado5 = random.randomInt(6)+1;

    if(dado1 == dado2 && dado1 == dado3 && dado1 == dado4 && dado1 == dado5){
        flag = true;
    };
    contador++;
    console.log(dado1, dado2, dado3, dado4, dado5);
    console.log('-------');
}

console.log('Fin del juego', 'Rondas:', contador)