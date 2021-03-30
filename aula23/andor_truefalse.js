/*
Operadores Lógicos
&& -> false && true -> false "o valor mesmo"
|| -> true && false -> vai retornar ' o valor verdadeiro'

FALSY
false
0
' ' "" ``
null / undefined
NaN

//QUalquer coisa diferente desse bloco de false, será true.

*/

// A partir do momento que achei o valor False, para o código.


console.log('Luiz Otávio' && 0 && 'Maria');  // 0

console.log('Luiz Otávio' && true && 'Maria');  // retorna a ultima que foi checada

console.log('Luiz Otávio' && true && NaN);  //NaN

// em JS tudo pode ser avaliado em true ou false.
//Avaliação de curto circuito, chega Luiz ok, checa Maria.
console.log ('Luiz' && 'Maria');  // Maria   
console.log ('Luiz' && '' && 'Maria');  //
console.log ('Luiz' && NaN && 'Maria');  // NaN


//Saber se irá executar ou não essa function

function falaOi () {
  return 'oi';
}

const vaiExecutar = false;

console.log(vaiExecutar && consofalaOi());  // false  ,end precisa que todas as expressoes sejam verdadeiras.

let vaiExecuta = 'Joao';
console.log (vaiExecuta && falaOi());  // irá executar pq, executou a variável, e em seguida irá executar a fç
// pouco utlizado essa expressão

// Utilização de ||

console.log (0 || false || null || 'Luiz Otávio' || true);  // Luiz Otávio, retorna o 1° valor verdadeiro

//Suponha que eu tenha um site de cores...

const corUsuario = null;   // usuário não colocar nenhuma cor
const corPadrao = corUsuario || 'preto';   // cor padrão
console.log(corPadrao);  //preto


// Usuário selecionou a cor red e não null, a cor padrão se comporta de forma lógica, red é avaliado como true. Como foi o primeiro a ser avaliado, irá retrnar red.

const corUsuario2 = 'red';   // usuário não colocar nenhuma cor
const corPadrao2 = corUsuario2 || 'preto';
console.log(corPadrao2);  //red


const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log (a || b || c || d || e); // 'false'   ,pegadinha trecho de código de string que contém valor. 

//Valor falso literal é sem aspas.

// Se todas as variáveis forem falsa, irá retornar a ultima falsa. Ex. abaixo.

const f = 0;
const g = null;
const h = false;
const i = false;
const j = NaN;

console.log (f || g || h || i || j);  // NaN

//Só 1 valor true:
console.log (f || g || 'Joao' || i || j);  // 'Joao'
