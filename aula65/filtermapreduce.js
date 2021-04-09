//Filter - retorna sempre uma array, com a mesma qtdade de elementos ou menos.

//Filter    , retorne os números maiores que 10.

//                0   1   2...
const numeros = [ 5, 50 ,80 ,1 ,2 ,3 ,5 ,8 ,7 ,11 ,15 ,22 ,27];

/* 
function callbackFilter(valor, indice, array) {
  if (valor > 10) {
    return true;
  } else {
    return false;
  }
}

const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);
 */

//= ex2_________ operação ternária ou qd é condição true or false, posso enxugar a função
/* 
function callbackFilter (valor) {
  return valor >10;
}
 */

//= ex3
/* 
const numerosFIltrados = numeros.filter(function(valor){
  return valor > 10;
})
 */

//= arrow function
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);


// ex 5________
/* 
Retorne as pessoas que tem o nome com 7 letras ou mais 
Retorne as pessoas com mais de 50 anos
Retorne as pessoas cujo nome termina com a 
 */

// criamos uma array em que cada índice temos um objeto.

const pessoas = [
  { nome: 'Luiz', idade: 62},            //0
  { nome: 'Maria', idade: 23},           //1
  { nome: 'Eduardo', idade: 55},         //2
  { nome: 'Letícia', idade: 19},
  { nome: 'Rosana', idade: 32},
  { nome: 'Wallace', idade: 47},
];

/* 
const pessoasComNomeGrande = pessoas.filter(function(obj) {       // retorna um novo array
  return obj.nome.length >=7;                              //console.log(valor.nome);
});            
console.log(pessoasComNomeGrande);
 */

//= arrow function

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 7);     
console.log(pessoasComNomeGrande);

/* const pessoasComMaisDeCinquenta = pessoas.filter(function(obj) {
  return obj.idade >50
}); */

const pessoasComMaisDeCinquenta = pessoas.filter(obj => obj.idade > 50);  
console.log(pessoasComMaisDeCinquenta);


/* const nomeTerminaComA = pessoas.filter(function(obj){
  return obj.nome.toLowerCase().endsWith('a');
}); */

const nomeTerminaComA = pessoas.filter(obj => {
  return obj.nome.toLowerCase().endsWith('a');
});
console.log(nomeTerminaComA);
// 






