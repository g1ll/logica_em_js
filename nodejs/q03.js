/*JS*/
const ler = require( 'scanf');//Instalar com 'npm install ler --save' na raiz do seu projeto
const escreve = console.log

escreve('Digite um valor para A:');
var a = ler('%d');
//a = 2
escreve('Digite um valor para B:');
var b = ler('%d');
//b=3
var aux = a;

a =b;
b = aux;

console.log('Invertendo valores de A e B');
console.log('Valor de A:'+a);
console.log('Valor de B:'+b);
