//const scanf = require('scanf');
let i,j,s,n,m = [],saida = '';

for(i=0, s=4, n = 0;i<s;i++){
	for(m[i] = [],j=0;j<s;j++){
		m[i][j] = n++;
		//m[i][j] = parseInt(Math.random()*100);
		saida += ((m[i][j]<10)?'0':'')+m[i][j]+' ';
	}
	saida+='\n';
}

console.log("Matriz:");

console.log(saida);

//console.log(m);
for(i=0,n=0;i<s/2;i++){
	for(j=0;j<s/2;j++){
		n+=m[i][j];
	}
}
console.log("\na) Soma do primeiro quadrante: %d",n);

for(i=s/2,n=0;i<s;i++){
	for(j=s/2;j<s;j++){
		n+=m[i][j];
	}
}
console.log("\nb) Soma do terceiro quadrante: %d",n);	
	
for(i=1,n=0;i<s;i++){
	for(j=0;j<=i-1;j++){
		n+=m[i][j];
	}
}
console.log("\nc) Soma dos elementos abaixo da diagonal principal: "+n);

for(i=0,n=0;i<s;i++){
	for(j=i+1;j<s;j++){
		n+=m[i][j];
	}
}
console.log("\nd) Soma dos elementos acima da diagonal principal: %d\n\n",n);
