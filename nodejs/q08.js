/*JS*/
const scanf = require('scanf');//Instalar com 'npm install scanf --save' na raiz do seu projeto

console.log('Informe a temperatura em Fahrenheit:');
var f = scanf('%f');
var c = (f-32)/9*5;

console.log('Fº: '+f.toFixed(2));
console.log('Cº: '+c.toFixed(2));
