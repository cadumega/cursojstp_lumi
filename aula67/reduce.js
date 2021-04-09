// Reduce , mais utilizada uma array em um único elemento. ex. Lista de números e quero saber o total de todos os elementos.

// Some todos os números da array
//                0   1   2...
const numeros = [ 5, 50 ,80 ,1 ,2 ,3 ,5 ,8 ,7 ,11 ,15 ,22 ,27];
const total = numeros.reduce(function(acumulador, valor, indice, array) {
  acumulador += valor;
  // console.log(acumulador, valor);
  return acumulador;
}, 0);                         //valor inicial de índice, para cada interação do laço

  console.log(total);


  // Retorne a array com os números pares , + fácil utilizar filter para isso

const numerosP = [ 5, 50 ,80 ,1 ,2 ,3 ,5 ,8 ,7 ,11 ,15 ,22 ,27];
const totalP = numerosP.reduce(function(acumulador, valor, indice, array) {
  if(valor % 2 === 0) acumulador. push(valor);
  return acumulador;
}, []);                         //valor inicial de índice, para cada interação do laço

  console.log(totalP);


  // Retorne a array com o dobro dos valores

const numerosD = [ 5, 50 ,80 ,1 ,2 ,3 ,5 ,8 ,7 ,11 ,15 ,22 ,27];
const totalD = numerosD.reduce(function(acumulador, valor) {
  acumulador.push(valor * 2);
  return acumulador;
}, []);                         //valor inicial de índice, para cada interação do laço

  console.log(totalD);

//ex2____ Somar só os ímpares
const numerosI = [ 2,4,6,8,1,3,5,9];
const totalI = numerosI.reduce(function(acumulador, valor) {
  if(valor % 2 !== 0) {               //ímpares    , se fosse par === 0
    acumulador += valor;
  }
  return acumulador;
}, 0);    

console.log(totalI);


// Retorne a pessoa mais velha , não é ideal fazer por reduce, mas é possível

const pessoas = [
  { nome: 'Luiz', idade: 62},            //0     //objeto
  { nome: 'Maria', idade: 23},           //1
  { nome: 'Eduardo', idade: 105},         //2
  { nome: 'Letícia', idade: 19},
  { nome: 'Rosana', idade: 32},
  { nome: 'Wallace', idade: 47},
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
  if(acumulador.idade > valor.idade) return acumulador;     //check uma propriedade do objeto com outra prop.obj
  return valor;           //e retornar o obj.
});

console.log(maisVelha);
