/*JS*/
const scanf = require('scanf');//Instalar com 'npm install scanf --save' na raiz do seu projeto

console.log('Informe um número:');
var num = scanf('%d');

console.log('Número: '+num);
console.log('Sucessor: '+(++num));
