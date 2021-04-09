//Map - usa o valor da array para criar uma nova array, terá o mesmo tamanho da array original
// Altera o original as manipulações de variáveis, só se criarmos um novo objeto.

//Multiplique os valores da array

//                0   1   2...
const numeros = [ 5, 50 ,80 ,1 ,2 ,3 ,5 ,8 ,7 ,11 ,15 ,22 ,27];
const numerosEmDobro = numeros.map(function(valor) {
  return valor * 2;
});
console.log(numerosEmDobro);

//ex2__ arrow function
const numerosEmDobrados = numeros.map(valor => valor *2);
console.log(numerosEmDobrados);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave 'nome' do objeto
// Adicione uma chave id em cada objeto (id)

const pessoas = [
  { nome: 'Luiz', idade: 62},            //0
  { nome: 'Maria', idade: 23},           //1
  { nome: 'Eduardo', idade: 55},         //2
  { nome: 'Letícia', idade: 19},
  { nome: 'Rosana', idade: 32},
  { nome: 'Wallace', idade: 47},
];

//const nomes = pessoas.map(function (valor) // como sabemos que é obj podemos trocar o param
// const nomes = pessoas.map(function (obj) {  // converter para arrow function

const nomes = pessoas.map(obj => obj.nome);

/* const idades = pessoas.map(function(obj) {
  delete obj.nome;              // return { idade: obj.idade};
  return obj;
});

console.log(idades); */

//= ex1.3

const idades = pessoas.map(obj => ({idade: obj.idade }));
console.log((idades));

/* 
const comIds = pessoas.map(function(obj, indice) {
  obj.id = (indice + 1) * 1000;
  return obj;
});
console.log(comIds);
 */

// esta alterando minha array original, preciso então criar um newObj

const comIds = pessoas.map(function(obj, indice) {
  const newObj = {...obj};
  newObj.id = indice;
  return newObj;
});

console.log(comIds);


/* 

const pessoas = [
  { nome: 'João', idade: 19 },
  { nome: 'Maria', idade: 42 },
  { nome: 'Pedro', idade: 18 },
  { nome: 'Luiz', idade: 63 },
  { nome: 'Wilson', idade: 57 },
  { nome: 'Lucas', idade: 25 },
];
 
const retornaString = pessoas.map(obj => obj.nome);
const removeNome = pessoas.map(obj => obj.idade);
const addId = pessoas.map((obj, indice) => {
  const newObj = {...obj};
  newObj.id = (indice + 1) * 1000; return newObj;
});

*/

/* 
 //buscar pelo primeiro nome em letra maiuscula
 
 const pessoas = [
  { nome: 'joana', idade: 62 },
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
  { nome: 'joão', idade: 47 },
];
 
const comecaComMaiuscula = pessoas.filter(pessoa => {
  return /[A-Z]/.test(pessoa.nome.slice(0));
});
console.log(comecaComMaiuscula);
 */

/* //como eu faço para colocar o Id antes do Nome e nao no final depois da idade.

{ id, ...resto} ou { ...resto, id }
*/