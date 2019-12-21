const scanf = require('scanf');

main();
function main(){

	let i=0,j,s,n,m = [], saida='';
		
	//m = 0;
	m.push(2);//guarda na ultima posicao o valor 2
	m.push(3);
	console.log(m);
	m.unshift(5);//adiciona na primeira posicao
	console.log(m);
	console.log('Defina o tamanho do Vetor:');
	s = scanf('%d');

	saida += 'Tamanho do do Vetor: '+s+'\n\nVetor Lido:\n';
	do{
		console.log('Informe um valor inteiro');	
		m[i] = scanf('%d');
		saida += m[i]+' ';
		i++;
	}while(i<s);
		
	saida += '\nVetor Transformado:\n';
	// for(i=0;i<s;i++){
	// 	if(m[i]<0){
	// 		m[i]=0;
	// 	}
	// 	saida += m[i]+' ';
	// }

	m.map(n=>n<0?0:n);
	console.log(n);
	
	console.log(saida)
}



