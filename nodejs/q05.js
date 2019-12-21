/*JS*/
const scanf = require('scanf');//Instalar com 'npm install scanf --save' na raiz do seu projeto

console.log('Digite a primeira nota N1:');
var a = scanf('%f');

console.log('Digite a segunda nota N2:');
var b = scanf('%f');

var media = (a+b)/2;
console.log('Média do aluno: '+media.toFixed(2));
