const scanf = require('scanf');

console.log('Informe o Total de Eleitores:');
var totalEleitores = scanf('%d');
console.log('Informe os Votos Brancos:');
var votosBrancos = scanf('%d');
console.log('Informe os Votos Nulos:');
var votosNulos = scanf('%d');
console.log('Informe os Votos Válidos:');
var votosValidos =  scanf('%d');

var perVotosBrancos = (votosBrancos*100)/totalEleitores; 
var perVotosNulos = (votosNulos*100)/totalEleitores; 
var perVotosValidos = (votosValidos*100)/totalEleitores; 
	
//Templates Strings ECMAScript2015
var saida = `\n\nTotal de Eleitores: ${totalEleitores}\n
		Votos Brancos: ${votosBrancos} (${perVotosBrancos} %)
		Votos Nulos: ${votosNulos} (${perVotosNulos} %)
		Votos Válidos: ${votosValidos} (${perVotosValidos} %)\n`;

console.log(saida);
//
