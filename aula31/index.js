// let tem escopo de {...bloco}
//var só tem escopo de função

/* 
const verdadeira = true;

let nome = 'Luiz';   // criando               //escopo global
var nome2 = 'Luiz'

if (verdadeira) {                       //escopo de bloco aninhado
  let nome = 'Otávio'; //criando
  // console.log(nome, nome2);

  if (verdadeira) {
    let nome = 'Outra coisa'
    var nome2 = 'Carlos'                  // redeclarando
    console.log(nome, nome2);           //Busca a variável dentro do bloco.
  }
 */

  function falaOi () {
    var sobrenome ='Miranda';
    // console.log(sobrenome);       //var não irá aceitar o console fora, not defined
  }
  console.log(sobrenome);  
  falaOi();