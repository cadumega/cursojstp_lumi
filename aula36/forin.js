// for in Lê os indices ou chaves do objeto , + simples a execução
// array vetor    0       1       2

/* 
const frutas = ['Pera', 'Maça', 'Uva' ];

for (let index in frutas) {
  console.log(frutas [index]);
} 
*/

// maneira classica
// for (let i =0; i<frutas.length; i++) {
//   console.log(frutas[i]);
// }

/* 
const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio',
  idade:30
};

for (let chaves in pessoa) {
  console.log(chaves);
}
 */

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio',
  idade:30
};
for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}

// console.log(pessoa.nome);   //Luiz
// console.log(pessoa['nome']);  //Luiz , mt útil qd não sabemos qual propriedade pegar