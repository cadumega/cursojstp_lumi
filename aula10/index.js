/*  

Aritméticos
Ordem de precedência:   
()   
**    
*    /    %      ,sendo na mesma linha segue a ordem conforme esta enunciado no ex
+     -

*/

const num1 = 5;
const num2 = 10;
console.log(num1 + num2);  //15

let num3 = '5';
let num4 = 10;
console.log(num3 + num4);  //510

let num5 = 2;
let num6 = 3;
console.log(num5 ** num6);

let num7 = 10;
let num8 = 5;
console.log(num7 % num8);
console.log(num1 + num2 * num5);  //ordem de precedência.
console.log((num1 + num2) * num5);  //ordem de precedência.

console.log(num1 * num2 / num3); //10

let contador = 1;
contador ++;     //operador de incremento, não podemos usar na const , só em let. pós ou pré
console.log(contador);  //2

let contagem = 1
console.log(contagem++)  //1 pós incremento
console.log(contagem)   //2

//Não é uma boa prática de programação, colocar o incremento e repetir na mesma chamada, abaixo:
let contei = 1;
console.log (contei++)

//Melhor maneira
let conta = 1;
conta++;
console.log(conta);  //2    , não misturar muita coisa para o código não ficar confuso.

//OPERADORES DE ATRIBUIÇÃO

let passo =2;
passo += 2;
passo += 2;
passo += 2;
console.log(passo);  //8

let passada =2;
passada *= 5;
console.log(passada);  //10

// NaN - Not a number
const numero1 = 10;
const numero2 = 'Luiz';
console.log( numero1* numero2);   //NaN

//Em algumas situações ele tenta resolver para você o JS.
const numero3 = 10;
const numero4= '5';   //importante que você resolva os problemas, pois é uma string, js fez a conversão
console.log( numero3* numero4);   //50

//garantir que é um número, podemos fazer a conversão de 3 maneiras.
const numeroA = 10;
const numeroB = parseInt ('5');    //converte isso para número inteiro
console.log( numeroA + numeroB);   // 50


//garantir que é um número, podemos fazer a conversão de 3 maneiras.
const numeroC = 10;
const numeroD = parseFloat ('5.2');    //converte isso para número inteiro
console.log( numeroC + numeroD);   // 15.2
