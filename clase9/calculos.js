function promedio(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    let promedio = sum / array.length;
    return promedio;
}

function otraFuncion(){
    return 'Esta es otra funcion';
}

module.exports = {
    promedio,
    otraFuncion
}