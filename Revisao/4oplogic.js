// and , or, not

let email = 'joao@gmail.com';
let password = '1234';

if (email === 'joao@gmail.com' && password === '1234') {
  console.log('Usuário autenticado, email e password corretos.');
} else {
  console.log('Dados inválidos');
}

/* 
Dentro do parenteses do if é composto por uma ou + condições, a 1° expressão é:
email === 'joao@gmail.com' && password === '1234'
Condição só será satisfatória, se os 2 operadores lógicos forem verdadeiro.
Pode dar satisfatório na 1° op, mas na 2° op false, logo.. dados serão inválidos
*/

//ex2 , uma das expressões precisa ser satisfatório, checa um ou outro.

let age = 18;
let sex = 'M';

if (age >= 18 || sex === M) {
  console.log('Entrada liberada.');
} else {
  console.log('Entrada barrada, não autorizado.');
}


//ex3 , só pode entrar mulher ! inverto , o sex vira 'M'.
let sex2 = 'F'
if (!sex === 'F') {
  console.log('Entrada liberada.');
} else {
  console.log('Entrada barrada, não autorizado.');
}


//ex3.1

var isActive = true;

isActive = !isActive;               //inverter informações, 

console.log(isActive);               // false
