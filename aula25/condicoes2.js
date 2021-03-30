// blocos de condições entre chaves, se satisfeita a engine js, irá executar uma condição e não os outros bloco.
// if e o else , um depende do outro . Se e se não

/* 
if () {
  
} else if () {

} else if () {

} else {

} 
*/

//ex.

const numero = 10;

if (numero <= 10) {          // True , fora do bloco de condições
  console.log('O número é menor que 10.');
}

if (numero >= 0 && numero <= 5) {         //estamos checandoo uma faixa
  console.log('Sim, o número é maior ou igual a zero')
  console.log ('O número esta entre 0 e 5');          // nada a executar se o n° não tiver na faixa
} else if (numero >= 6 && numero <= 8) {
  console.log('O número está entre 6 e 8');
} else if (numero >= 9 && numero <= 11) {  // True
  console.log('O número está entre 9 e 11');
} else {
  console.log('O número não está entre 0 e 11.');
}

console.log ('..aqui vai o resto do código fora do bloco, fora do escopo de blocos das condições')




// Se atente ao escopo do bloco, e a primeira condição verdadeira!!!!!  é a que irá retornar, mesmo tendo + de uma true.
// Se precisar checar mais de uma condição else if () {} , esses blocos não tem ; para abrir e fechar
// Para executaro  else, as outras condições precisam ser checadas.

