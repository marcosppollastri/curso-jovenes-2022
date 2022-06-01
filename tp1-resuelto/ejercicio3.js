// Escribir un programa en base a tres notas parciales de un alumno. Calcular su
// condicionalidad de la siguiente manera:
// Regular en caso que todas las notas sean mayor o igual a 4.
// Libre en caso que alguna de las notas sea menor a 4.
// Promocionado en caso de que además de ser regular, el promedio de sus notas
// sea mayor o igual a 7.
// El programa debe imprimir los carteles “Regular”, “Libre” o “Promocionado” según el caso
// que corresponda.

var nota1 = 4;
var nota2 = 4;
var nota3 = 2;
var estado;
var promedio = (nota1 + nota2 + nota3) / 3;

if((nota1 >= 4) && (nota2 >= 4) && (nota3 >= 4)){
    estado = "Regular";
    if(promedio >= 7){
        estado = "Promocionado";
    }
} else {
    estado = "Libre";
}

console.log(estado);
