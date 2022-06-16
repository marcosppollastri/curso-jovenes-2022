// let jugador = {
//     nombre: 'Luis Suarez',
//     posicion: 'Delantero',
//     equipo: 'Sin equipo',
//     edad: 35
// };

// let jugador = new Object();
let jugador;
console.log(jugador);
jugador = {};
console.log(jugador);
// jugador.nombre = 'Luis Suarez';
// jugador.posicion = 'Delantero';
// jugador.equipo = 'Sin equipo';
// jugador.edad = 35;
jugador = {
    nombre: 'Luis Suarez',
    posicion: 'Delantero',
    equipo: 'Sin equipo',
    edad: 35
}
console.log(jugador);

jugador.casado = true;

// console.log(jugador.casado);
const prop = 'casado'
console.log(jugador[prop]);
console.log(jugador.prop);



