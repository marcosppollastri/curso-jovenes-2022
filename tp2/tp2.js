const {randomInt} = require('./random');

//Completar él código donde sea necesario

/**
 * Función que devuelve el valor numerico del perimetro de un cuadrado pasando su lado por parametro.
 */
function getPerimetroCuadrado(lado){
    //completar
}

/**
 * Función que devuelve el valor numerico de la superficie de un triangulo pasando su base y altura.
 */
function getSuperficieTriangulo(base, altura){
    //completar
}

/**
 * Función que devuelve el valor booleano true si un numero es divisible en otro, caso contrario devolver false.
 */
function esDivisible(num, div){
    //completar
}

/**
 * Función que devuelve el tipo de triangulo seguns sus lados: ('equilatero', 'isoseces' y 'escaleno')
 */
function getTipoTriangulo(lado1, lado2, lado3){
    //completar
}

//NO TOCAR EL CÓDIGO A PARTIR DE ACÁ
//se generan variables random para calcular
let lado = randomInt(10) + 1;
let base = randomInt(10) + 1;
let alt = randomInt(10) + 1;
let n1 = randomInt(1000) + 1, 
    n2 = randomInt(1000) + 1,
    d1 = randomInt(100) + 1,
    d2 = randomInt(100) + 1;

//los lados son arreglos, vamos a ver la explicación de este código en la clase 9
let ladosT1 = [];
let ladosT2 = [];
let ladosT3 = [];

for (let i = 0; i < 3; i++) {
    ladosT1.push(randomInt(10)+1);
    ladosT2.push(randomInt(10)+1);
    ladosT3.push(randomInt(10)+1);
}

//utilización de las funciones
let perCuadrado = getPerimetroCuadrado(lado);
let supTriangulo = getSuperficieTriangulo(base, alt);
let div1 = esDivisible(n1, d1);
let div2 = esDivisible(n2, d2);
let t1 = getTipoTriangulo(ladosT1[0], ladosT1[1], ladosT1[2]);
let t2 = getTipoTriangulo(ladosT2[0], ladosT2[1], ladosT2[2]);
let t3 = getTipoTriangulo(ladosT3[0], ladosT3[1], ladosT3[2]);
let t4 = getTipoTriangulo(ladosT3[0], ladosT3[0], ladosT3[0]);


//salida de resultados.
console.log(`Perimetro de un cuadrado de lado ${lado}:`, perCuadrado);
console.log(`Superficie de un triangulo de base ${base} y alt ${alt}`, supTriangulo);
console.log(`Es divisible entre ${n1} y ${d1}:`, div1);
console.log(`Es divisible entre ${n2} y ${d2}:`, div2);
console.log(`T1 con lados ${ladosT1.toString()} de tipo:`, t1);
console.log(`T2 con lados ${ladosT2.toString()} de tipo:`, t2);
console.log(`T3 con lados ${ladosT3.toString()} de tipo:`, t3);
console.log(`T4 con lados ${ladosT3[0]},${ladosT3[0]},${ladosT3[0]} de tipo:`, t4);

