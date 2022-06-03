function getBienvenida(usuario){
    let msj = 'Bienvenido ' + usuario;
    return msj;
}

let msj = getBienvenida('Marcos');
let msj2 = getBienvenida('Pepito');

console.log(msj);
console.log(msj2);