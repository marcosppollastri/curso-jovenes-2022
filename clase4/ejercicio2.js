// 2- Un programa que diga si la edad al ser mayor o igual a 16 puede votar optativamente,
// si es mayor o igual a 18 vota obligatorio, y si es menor de 16, no vota.

var edad = 21;

if(edad >= 16){
    console.log('Puede votar');
    if(edad >= 18) {
        console.log('OBLIGATORIO');
    }
} else {
    console.log('No puede votar');
}