function getCondicionalidad(nota1, nota2, nota3){
    let estado;
    let promedio = (nota1 + nota2 + nota3) / 3;

    if((nota1 >= 4) && (nota2 >= 4) && (nota3 >= 4)){
        estado = "Regular";
        if(promedio >= 7){
            estado = "Promocionado";
        }
    } else {
        estado = "Libre";
    }

    return estado;
}

let alumno1 = getCondicionalidad(4,6,8);
let alumno2 = getCondicionalidad(4,2,8);
let alumno3 = getCondicionalidad(10,7,2);

console.log('Alumno 1: ', alumno1);
console.log('Alumno 2: ', alumno2);
console.log('Alumno 3: ', alumno3);