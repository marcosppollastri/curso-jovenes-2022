// Programa que imprima todos los numeros del 0 al 100 que sean divisibles
// en 3 o 4;

for(var i = 0; i <= 100; i++){
    var restoTres = i % 3;
    var restoCuatro = i % 4;
    var restoDos = i % 2;
    if((restoTres !== 0 || restoCuatro !== 0) ){
        console.log(i);
    }
}