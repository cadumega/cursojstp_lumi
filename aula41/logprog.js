// Escreva uma função que recebe 2 números e retorne o maior deles:
// function max(x,y) {
//   if (x > y) {
//     return x;

//     return y;
//   }
// }

// const maior = max (1,2);          não vou reusar esses valores , tem como colcoar direto

function max(x,y) {
  if (x > y) return x;
  return y;
}

// ==

function max(x,y){
return x > y ? x : y;        // REFATORAR , se x > y ? retorno x contrario disso retorno y
}

// ==

const max2 = (x,y) => {         //add arrow function
  return x > y ? x : y;
};

// ==

const max2 = (x,y) => x > y ? x : y;

console.log(max(10,2));

// == 

const max = (x, y) => Math.max(x, y);

//_______

const maior2 = (n1, n2) => (n1 > n2 ? n1 : n2 > n1 ? n2 : 'Iguais');

//==

const maior2 = (numero1, numero2) => {
  if (numero1 > numero2) return numero1;
  if (numero1 < numero2) return numero2;
  return 'Iguais';
};