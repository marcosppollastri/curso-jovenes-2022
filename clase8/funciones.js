function cubo(n){
    let res = n ** 3;
    return res;
}

function cuadrado(n){
    let res = n ** 2;
    for (let i = 0; i < n; i++) {
        console.log('Esto es el scope del bloque for de cuadrado()', i);
        
    }
    // console.log('Esto es el scope de la funcion cuadrado()', i);
    return res;
}


let cuad1 = cuadrado(8);
let cuad2 = cuadrado(10);
console.log(cuad1);

let cubo1 = cubo(3);
let cubo2 = cubo(7);
let cubo3 = cubo(9);


// console.log(cubo1, cubo2, cubo3);
