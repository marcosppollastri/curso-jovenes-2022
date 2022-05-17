// Calculadora de precio con impuesto
// SI el monto es mayor o igual a 2000, se debe sumar el 21% del valor
// Si el monto es menor a 2000,  se debe sumar el 8% del valor
// Se debe imprimir el precio con impuestos, y el valor del impuesto

var precio = 2100;
var impuesto;

if(precio >= 2000){
    impuesto = (precio / 100) * 21;
} else {
    impuesto = (precio / 100) * 8;
}

var total = precio + impuesto;

console.log('Precio total', total);
console.log('Impuestos:', impuesto);