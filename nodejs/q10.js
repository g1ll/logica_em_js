/*JS*/
const scanf = require('scanf');//Instalar com 'npm install scanf --save' na raiz do seu projeto

console.log('Informe a Largura da conzinha:');
var l = scanf('%f');

console.log('Informe a Altura da conzinha:');
var a = scanf('%f');

console.log('Informe o Comprimento da conzinha:');
var c = scanf('%f');

var A =  l*a*2+c*a*2;

console.log('Área total da cozinha: '+A.toFixed(2));
