//ex.1, Maior ou igual a 18 que pode beber.

let age = 15;
let result = '';

if (age >= 18) {
  result = 'Ok, pode beber.'
} else {
  result = 'Não, você não pode beber, aguarde completar +18.'
};

console.log(result);


// ex.1.1 , Operador ternário. Se idade >= 18, 1°cond. "OK" se não... : "Não ok"
// condição ? true : false               - código e o mesmo resultado.

let age2 = 15;
let result2 = age2 >=18 ? 'ok' : 'Não ok.';

console.log(result2);

