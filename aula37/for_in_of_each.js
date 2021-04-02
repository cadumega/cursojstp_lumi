//            0123...
const nome = 'Luiz Otávio';
const nome2 = ['Luiz' , 'Otávio', 'Henrique'];

   //var de controle; var de condição; incremento
// for (let i = 0; i < nome.length; i++) {                    // laço normal clássico
//   console.log(nome[i]);
// }


// for (let i in nome) {                               // 2° maneira , for in
//   console.log(nome[i]);
// }

//_______________________
// for (let valor of nome) {                       //3° maneira, + usada for of , retorna só valor
//   console.log(valor);                            // para objeto não conseguimos usar for of
// }                     

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio'
};

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}

for ( let valor of pessoa) {      //ERROR pesssoa is not interable

}
// _____________________

// for (let valor of nome2) {
//   console.log(valor);
// }

// recebe uma fç que recebe elemento e um índice          // 4° maneira forEach

// nome2.forEach(function (el) {
//   console.log (el);
// });

// nome2.forEach(function (valor, indice, array) {              //retornando indice e array
//     console.log (valor, indice, array);
//   });
