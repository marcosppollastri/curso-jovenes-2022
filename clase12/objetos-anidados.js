let pokemon = {
    nombre: 'Pikachu',
    tipo: 'Electrico',
    pokedex: 25,
    entrenador: {
        nombre: 'Ash',
        origen: 'Pueblo Paleta',
        ligas: 1,
        edad: 10,
    },
    movimientos: [
        {
            nombre: 'Impactrueno',
            tipo: 'electrico',
            poder: 40,
            precision: 80,
            usos: 10,
        },
        {
            nombre: 'Tacle',
            tipo: 'normal',
            poder: 40,
            precision: 80,
            usos: 20,
        },
        {
            nombre: 'Gruñido',
            tipo: 'normal',
            poder: 0,
            precision: 100,
            usos: 30,
        },
        {
            nombre: 'Cola ferrea',
            tipo: 'acero',
            poder: 40,
            precision: 80,
            usos: 10,
        }
    ]
}

//1- Console.log de el nombre y edad del entrenador de Pikachu.
//2- Modificar el valor de precisión del movimiento de nombre tacle en 100.
//3- Eliminar el ultimo movimiento utilizando la función pop, y reemplazarlo utilizando la función push por uno nuevo.

const nombre = pokemon.entrenador.nombre;
const edad = pokemon.entrenador.edad;

console.log(nombre, edad);

pokemon.movimientos[1].precision = 100;

console.log(pokemon.movimientos);

pokemon.movimientos.pop();
pokemon.movimientos.push({
    nombre: 'Trueno',
    tipo: 'electrico',
    poder: 100,
    precision: 60,
    usos: 10,
});

console.log(pokemon.movimientos);
