/*
 map --> mapeia;
filter --> filtra.


map() mapeia seu array original em outro array, mas não altera o original, cria uma cópia.

filter() filtra, passa uma peneira no array original, jogando os valores que passaram na peneira pra outro array. 
*/

// EX____ Filtrar Pares
//  Dobrar os valores
// Reduzir (somar tudo)


//                0   1   2...
const numeros = [ 5, 50 ,80 ,1 ,2 ,3 ,5 ,8 ,7 ,11 ,15 ,22 ,27];
const numerosPares = numeros.filter(function (valor) {
  return valor % 2 === 0;
}).map(function(valor){                 
  return valor*2;
}).reduce(function(ac,valor){             //324
  return ac + valor;
});

console.log(numerosPares);

//= arrow function
const numerosLista = [ 5, 50 ,80 ,1 ,2 ,3 ,5 ,8 ,7 ,11 ,15 ,22 ,27];
const numerosP = numerosLista
  .filter(valor =>valor % 2 ===0 )
  .map(valor => valor *2)
  .reduce ((ac,valor) => ac + valor);    

console.log(numerosP);