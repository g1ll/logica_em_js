const read = require('scanf')
print = console.log;
console.clear();

const m = []
let i,j,s=0,c=1

print("\n\Informe o tamanho da matriz:\n")
s=read("%d")

if(s<4)
for(i=0;i<s;i++)
  for(m[i]=[],j=0;j<s;j++){
        print("\n\Informe o valor do elemento [%d][%d]:\n",i,j)
        m[i][j]=read("%d")
        console.clear();
      }
else
  for(i=0;i<s;i++)
  for(m[i]=[],j=0;j<s;j++,c++)
        m[i][j]=c

print("Matriz %dx%d:\n",s,s)
//console.table(m)

let row=''
for(i=0;i<s;i++){
  for(row='',j=0;j<s;j++,c++)
        if(m[i][j]>=10)row+=((j==0)?'| ':'')+m[i][j]+' | '
        else row+=((j==0)?'| ':'')+'0'+m[i][j]+' | '
  print(row)
}

print(`\nImprimindo a Diagonal Principal e a Secundária da Matriz ${s}x${s}:\n`)

for(i=0;i<s;i++){
  let tp='',ts='',ch='\t'
  for(j=0;j<s;j++,c++){
    if(i==j){
      if(i<s/2){
        for(let n=0;n<i;n++)tp+=ch
        for(let n=0;n<s-1-i*2;n++)ts+=ch
        print((m[i][s-1-j]==m[i][j])?
                    tp+' '+m[i][j]
                    :tp+m[i][j]+ts+m[i][s-1-j])
      }else{
        for(let n=0;n<i-(s-1-i);n++)tp+=ch
        for(let n=0;n<s-1-i;n++)ts+=ch
        print(ts+m[i][s-1-j]+tp+m[i][j])
      }
      tp=ts=''
    }
  }
}