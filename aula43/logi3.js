/* 
Escreva uma função que recebe um número e retore o seguinte:
Número é divisível por 3 = Fizz       // *1
Número é divisível por 5 = Buzz
Número é divisível por 3 e 5 = FizzBuzz
Número é divisível por 3 e 5 = Retorna o próprio número
Checar se o número é realmente um número = Retorna o próprio número
Use a função com números de 0 a 100   , laço ou looping qq para resolver
*/

function fizzBuzz (numero){
  if (typeof numero !== 'number') return numero;
  if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
  if (numero % 3 === 0 ) return 'Fizz'; // *1 se o número for divisivel por 3 = 0 retorno Fizz
  if (numero % 5 === 0 ) return 'Buzz';
  
  return numero;
}

for (let i=0; i <=100; i++) {
  console.log(i, fizzBuzz(i));
}





// = 

/* 
const fizzBuzz = (num) => {
  return (isNaN(num)) ? `${num} não é um número válido.` :
      ((num % 3 == 0) && (num % 5 == 0)) ? `FizzBuzz` :
      (num % 3 == 0) ? `Fizz` :
      (num % 5 == 0) ? `Buzz` : num;
};
 */