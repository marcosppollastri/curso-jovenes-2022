// Realizar un programa que imprima todos los números enteros divisibles en 3 del 1 al 200

//      / ---> COCIENTE
//      % ---> RESTO

for(var i = 1; i <= 200; i++){
    var resto = i % 3;
    if( resto === 0){
        console.log(i);
    }
}