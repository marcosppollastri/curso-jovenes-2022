function calcularPromedio(nota1, nota2, nota3, nota4){
    let promedio = (nota1 + nota2 + nota3 + nota4) / 4;
    return promedio;
}

let alumno1 = calcularPromedio(4,7,9, 10);
let alumno2 = calcularPromedio(9,2,5, 7);
let alumno3 = calcularPromedio(1,3,7, 10);
let alumno4 = calcularPromedio(8,10,4, 3);

console.log(alumno1, alumno2, alumno3, alumno4);