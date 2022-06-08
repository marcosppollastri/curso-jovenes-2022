const { promedio } = require('./calculos');

const resultados = [0 , 1 , 1, 1, 0, 0, 3, 0, 1, 3, 0, 0];
const res = promedio(resultados);
console.log(res);