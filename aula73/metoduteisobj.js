/* 
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)

//Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade) 
*/

/* 
const produto = { nome: 'Produto', preco: 1.8 };
const caneca = {          // para não apontar ao mesmo local, espalho o produto dentro desse obj
  ...produto,
  material: 'porcelana'
};      

caneca.nome = 'Luiz Otávio';
caneca.preco = 2.5;
//produto.nome = 'Luiz Otávio;
console.log(produto);
console.log(caneca);
 */

//= ex2____ + manual

/* 
const produto = { nome: 'Produto', preco: 1.8 };
const caneca = Object.assign ({}, produto, {material: 'porcelana'});   // spread + intuitivo,mas existe

caneca.nome = 'Outro nome';
caneca.preco = 2.5;
console.log(produto);
console.log(caneca);
 */

//ex3___

/* 
const produto = { nome: 'Produto', preco: 1.8 };
Object.freeze(produto);
produto.nome = 'Outro nome';        // Tentei alterar o produto.nome mas o object freeze não deixou
const caneca = {nome: produto.nome, preco: produto.preco};
console.log(produto);
 */

//ex4___ 
/* 
const produto = { nome: 'Produto', preco: 1.8 };
Object.defineProperty(produto, 'nome', {
  writable: false,
  configurable: false,
  value: 'Qualquer outra coisa'
});
// console.log(Object.getOwnPropertyDescriptor(produto,'nome'));
produto.nome = 'Outra coisa'
delete produto.nome;
// delete produto.preco;
console.log(produto);
 */

//ex5_____
/* 
const produto = { nome: 'Produto', preco: 1.8 };
// console.log(Object.values(produto)); 
// console.log(Object.entries(produto)); 

for (let entry of Object.entries(produto)) {
  console.log(entry);
}
 */

//ex6___
/* 
const produto = { nome: 'Produto', preco: 1.8 };
// console.log(Object.values(produto)); 
// console.log(Object.entries(produto)); 

for (let [chave,valor] of Object.entries(produto)) {
  console.log(chave, valor);
}
 */

//= ex7____

const produto = { nome: 'Produto', preco: 1.8 };
// console.log(Object.values(produto)); 
// console.log(Object.entries(produto)); 

for (let valor of Object.entries(produto)) {
  console.log(valor[0], valor[1]);
}


