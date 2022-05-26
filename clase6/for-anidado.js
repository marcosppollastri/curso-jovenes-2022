/*
*   *****
*   *****
*   *****
*   *****
*   *****
*/

var n = 10;
var msj;

for(var i = 0; i < n; i++){
    msj = '';
    for (var j = 0; j < n; j++) {
        msj += 'u';
        for (var k = 0; k < 3; k++) {
            msj += '/';
            
        }
        msj += ' '
    }
    console.log(msj);
}


