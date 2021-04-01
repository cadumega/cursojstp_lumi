// console.log('Linha 0');
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');

//bloco do for não tem ; no final
// criar var dentro do (), criar uma condição que irá parar esse laço, incre/decremento
// Cada volta é incrementado +1
// Obrigatório ; dentro separando, e ao final não precisa no incremento.

/* 
  for ( let i = 0; i <= 5; i++) {
  console.log(`Linha ${i}`);
}
 */

/* 
  for ( let i = 0; i <= 10; i+= 2) {
  console.log(`Linha ${i}`);
} 
*/

/* 
  for ( let i = 10; i >= 1; i-= 2) {      //inverti o laço
  console.log(`Linha ${i}`);
}  
*/

/* 
for ( let i = 0; i <= 10; i++) {
  const par = i % 2 === 0 ? 'par' : 'ímpar'; // estrutura ternaria
  console.log(i, par);
} 
*/

//For clássico, esta mais verboso, existem outras maneiras mais simples, opões mais modernas
//                0         1         2
const frutas = ['maça', 'laranja', 'uva'];

for (let i = 0; i < frutas.length; i++) {
  console.log(`Índice ${i}`, frutas[i]);
}

// Sistema

/* function imparPar() {
  const formulario = document.querySelector('.formulario');
  const resultadoImpaPar = document.querySelector('.resultadoImpaPar');

  function recebeButton(e) {
      e.preventDefault();

      const numero = document.querySelector('.inputNumero');
      const valor = numero.value;
      const verificar = Number(valor);

      if (!verificar) {
          resultadoImpaPar.innerHTML = `Digite um número válido`;
          return;
      } else { isValid() }

      function isValid() {
          if (verificar % 2 === 0) {
              resultadoImpaPar.innerHTML = `Seu número é par`;
          } else {
              resultadoImpaPar.innerHTML = `Seu número é impar`;
          }
      }
  }

  formulario.addEventListener('submit', recebeButton)
}

imparPar(); */
