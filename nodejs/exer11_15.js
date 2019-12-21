
	
let i,t,n,pi,termo,min=0.0000001;

for(i=1,n=1,termo = 4/n,pi=0;termo>min;i++,n+=2,termo = 4/n){
     pi += (i%2==0)?-termo:termo;

     console.log(`${(i%2==0)?'-':'+'}4/${n}(${termo})`);   
 }
        
console.log(`= ${pi}`); 
console.log(`\ntermo = ${termo}\n`);