let mascota = new Object();

mascota = {
    nombre: 'tinki winki',
    tipo: 'michi',
    edad: 3,
}

const tieneNombre = mascota.hasOwnProperty('comidaFavorita');

if(mascota.nombre){
    console.log('Tiene nombre');
}

if(!mascota.comidaFavorita){
    console.log('No tiene comida favorita');
}

console.log(tieneNombre);