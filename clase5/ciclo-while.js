// var control = 0;
// while(control < 435){
//     console.log('seguimos en el while');
//     control = control + 3;
//     console.log(control);
// }

// console.log('Fin del programa');

var {getRandomInt} = require('./Random');

var stock = 1000;
var pedido;

while(stock > 0){
    pedido = getRandomInt(100);
    if(pedido <= stock){
        stock = stock - pedido;
        console.log('-----');
        console.log('Pedido:', pedido, 'Stock restante:', stock);
    } else {
        console.log('-----');
        console.log('Stock insuficiente');
    }
    
}