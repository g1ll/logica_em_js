/*JS*/
const scanf = require('scanf');//Instalar com 'npm install scanf --save' na raiz do seu projeto

console.log('Informe a temperatura em Celsius:');
var c = scanf('%f');
var f = c/5*9+32;

console.log(`Cº: ${c.toFixed(2)} \nFº: ${f.toFixed(2)}`);

