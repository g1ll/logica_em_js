/*JS*/
const scanf = require('scanf');//Instalar com 'npm install scanf --save' na raiz do seu projeto

console.log('Informe o raio do círculo:');
var raio = scanf('%f');

var area = Math.PI*raio**2;

console.log('Área: '+area.toFixed(2));
