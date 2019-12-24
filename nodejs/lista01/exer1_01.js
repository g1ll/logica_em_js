/*JS*/
const scanf = require( 'scanf');//Instalar com 'npm install ler --save' na raiz do seu projeto
const print = console.info

print("Informe um valor para A:");
var a = scanf("%d")
print("Valor de a é: %d",a);

print("Informe um valor para B:");
var b = scanf("%d")

print("Informe um valor para C:");
var c = scanf("%d")

print("\nValores Informados: \n\tA = %d\n\tB = %d\n\tC = %d\n",a,b,c);

var	area_tri = a*b/2;
var	area_qua = b*b;
var	area_ret = area_tri*2;
var	area_cir = Math.PI*c**2;

print("\na) Área do triângulo: %.2f\n",area_tri);
print("\nb) Área do quadrado: %.2f\n",area_qua);
print("\nc) Área do retângulo: %.2f\n",area_ret);
print("\nd) Área do triângulo: %f\n\n",area_cir);