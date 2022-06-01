// Usted realizó una inversión cuya ganancia anual es del 15% del valor original. Si el
// monto de la inversión supera los 500.000 pesos, la ganancia anual será del 20%. Realizar
// un programa que en base al monto de la inversión, imprima por pantalla el valor de la
// ganancia en pesos.

var monto = 400000;
var ganancia; 

if(monto > 500000){
    ganancia = (monto / 100) * 20;
} else {
    ganancia = (monto / 100) * 15;
}
var total = monto + ganancia;

console.log('Ganancia: ', ganancia);
console.log('Total: ', total);