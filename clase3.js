var alumno = "marcos";
var nota1 = 10;
var nota2 = 3;

// var edad = 28;
// var res = intro + usuario + "\n\tTu edad es: " + edad;

const input = require('./readline');

const nombre = input.readInput();

var promedio = (nota1 + nota2 )/2;
var estado;
var promocion;

if ((nota1 >= 4) && (nota2 >= 4)) {
    estado = "APROBADO";
    if(promedio >= 7) {
        promocion = "PROMOCIONA"

    } else {
        promocion = "NO PROMOCIONA"
    }
} else {
    estado = "REPROBADO";
}

var msj = "Hola " + alumno + "\nTu promedio es: " + promedio;

console.log(msj);
console.log("Estado:", estado);
console.log(promocion);




