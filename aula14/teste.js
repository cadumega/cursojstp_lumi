let num1 = 10;
let num2 = 2;
let num3 = 10.5789898594;
let num4 = 10.25;  // Quero saber se o número é inteiro
let num5 = 0.7;
let num6 = 0.1;

// console.log(num5+num6);    //0.7999999
// num5 +=num6 ;           //0.8           num1 = num1 + num2
// num5 +=num6 ;           //0.9           o correto..
// num5 +=num6 ;           //1.0          entretanto temos uma imprecisão   0.999999
// num5 +=num6 ;           //1.1       adicionando 0.1

/* MELHOR MANEIRA!!! */
// num5 = num5.toFixed(2);     para resolver o problema do não reconhecer como inteiro
// num5 = parseFloat(num5.toFixed(2));    //1   ou   num5 = Number(num5.toFixed(2));

// console.log(num5);
// console.log(Number.isInteger(num5));   //false   , por baixo dos panos o JS ainda entende como float.

// OUTRA FORMA DE RESOLVER ISSO, é não trabalhar fazendo constas com FLOAT.
num5= (( num5 * 100 ) + ( num6 * 100 )) / 100; // 0.8      //não temos mais imprecisão
num5= (( num5 * 100 ) + ( num6 * 100 )) / 100; // 0.9
num5= (( num5 * 100 ) + ( num6 * 100 )) / 100; // 1.0
console.log(num5);
console.log(Number.isInteger(num5));         


// console.log (num1.toString() + num2);
// console.log(typeof num1);  //12  ,não é o correto pois concatenou.
// num1 = num1.toString();   // alterar pra sempre o num1 para string

// console.log(num1.toString(2))//representação binária com esse método toString

// console.log(num3.toFixed(2));  //arredondar as casas decimais para duas.

//console.log(Number.isInteger(num4));   //false ,pois é um número float.

let temp = num1 * 'Olá';
let temp2 = num1 * '5';
//console.log(temp);   //NaN               ,não faça contas com string!!
// console.log(Number.isNaN(temp));   // true, esse número é um NaN, uma conta inválida
// console.log(Number.isNaN(temp2));   // false, só que não é uma boa prática de programação, preciso converter!!


