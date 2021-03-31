// Atribuição via desestruturação

/*

let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A


const letras = [b, c, a];
[a, b , c] = letras;  //Atribuição via desestruturação,modificando o valor das var

console.log(a, b, c);

*/ 

/*
// Facilitar a vida com a sintaxe abaixo de reatribuição

//               0    1     2    3    4     5    6   7    8
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900,]
const [umNumero,doisNumero, ...resto] = numeros;    //peguei o element da var e coloquei na var
console.log(umNumero, doisNumero);  // 100,200
console.log(resto);
*/


// operador   ... rest , ... spread

// array dentro de array

//                   0        1        2
//                 0 1 2    0 1 2    0 1 2
const numeros = [ [1,2,3], [4,5,6], [7,8,9] ];
// console.log(numeros[1][2]); //6
const[ lista1, lista2, lista3 ] = numeros;
console.log( lista3[2] );              // 9  //atribuição via desestruturação, para objetos
