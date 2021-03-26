// Você pode fazer de várias maneiras as resoluções 

let num1 = 9.51;         //  9.49 arredonda para baixo 9.50 >= para cima
// let num2 = Math.floor(num1);  //arredondar  , para baixo
// let num2 = Math.ceil(num1);  //arredondar  , para cima
// let num2 = Math.round(num1);    //função dentro do objeto se chama método.

// console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,7,6));    //pegar o > número
// console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,7,6));    //pegar o < número

// console.log(Math.random());  // número aleatório entre 0 e 1

// const aleatorio = Math.random() * (10 - 5) + 5;  // pegar um n°aleatório entre 10 e 5
const aleatorio = Math.round(Math.random() * (10 - 5) + 5);  // arredondar o random range
console.log(aleatorio);

// console.log(Math.pow(2,3));     //8    pouco usado   , 2³    ,2  elevado a 3 = 8 
// console.log( 2**3);           //8

// let num2 = 9;
// console.log (num2 ** 0.5);      // raiz quadrada  ou  (num2 ** (1/2));

console.log( 100 / 0);    // Infinty  , em JS você pode dividir um número por 0, em outras linguagens da erro. , outro tipo de dado númerico, é avaliado como verdadeiro o boolean. Mais se aproxima do zero maior o resultado da conta.

console.log( 100 / 0.000000000000000000000000001);   // avalia como true!