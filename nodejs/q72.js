//const scanf = require('scanf');
var i,j,s,n,m = [],saida = '';

for(i=0, s =5, n = 0;i<s;i++){
	m[i] = [];//Cria um novo objeto array
	for(j=0;j<s;j++){
		m[i][j] = n++;
		//m[i][j] = parseInt(Math.random()*100);

		saida += ((m[i][j]<10)?'0':'')+m[i][j]+' ';
	}
	saida+='\n';
}

console.log("Matriz:");

console.log(saida);

//console.log(m);
for(j=0,i=3,n=0;j<s;j++){
	n+=m[i][j];
}

console.log("a) Soma da linha 4: %d",n);

for(j=1,i=0,n=0;i<s;i++){
	n+=m[i][j];
}

console.log("b) Soma da coluna 2: %d",n);

for(j=0,i=0,n=0;i<s;i++,j++){
	n+=m[i][j];
}
console.log("c) Soma da diagonal principal: %d",n);

for(j=s-1,i=0,n=0;i<s;i++,j--){
	n+=m[i][j];
}
console.log("d) Soma da diagonal secundaria: %d",n);

for(i=0,n=0;i<s;i++){
	for(j=0;j<s;j++){
		n+=m[i][j];
	}
}
console.log("e) Soma total: %d \n",n);
