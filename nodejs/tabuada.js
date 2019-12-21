const read = require('scanf');
// const print = console.log;

console.log("\nInforme um número: ")
let n = read('%d');
let s = '';
for(let i=0;i<=10;i++){
    console.log(`${i}x${n}=${i*n}`);
    //printf("%d x %d = $d",i,n,n*i);//em C
}
