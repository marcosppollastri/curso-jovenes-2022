const {randomInt} = require('./random');

function randomName(){
    const names = ['jose', 'maria', 'juan'];
    const i = randomInt(names.length);
    const name = names[i];
    return name;
//
}

const name = randomName();
console.log(name);