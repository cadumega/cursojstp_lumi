//                -5      -4        -3          -2        -1
//                0        1         2          3        4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia']

//nomes.splice(índice, delete, elemen1,elemen2);  
// (índice q quero começar, e qts quero remover, element1,element2)
//pop

/* 
nomes.splice(4, 1)
console.log(nomes);

 */


//ex2_______
/* 
const removidos = nomes.splice(3,2);        //começa no 3 e vai pra frente...
console.log(nomes,removidos);
 */

//ex3____
/* 
const removerneg = nomes.splice(-2,1);
console.log(nomes,removerneg); 
*/

//ex4___
/* 
const removidos = nomes.splice(3,2,'XandaiaXan' ,'Otávio');        //substitui Luiz por Xan   
console.log(nomes,removidos); 
*/

//ex5___ simular o push , o push é mais fácil para add ao final
/* 
nomes.splice(nomes.length,0, 'Luiz','Mega','Osvaldo')
console.log(nomes);
 */

//ex5__ unshift, add no início
nomes.splice(0, 0, 'Luiz' , 'Otávio')
console.log(nomes);















/* Splice está no prototype do Array, então só serve para arrays.
- Sempre que você reorganiza um Array, o algoritmo tem tempo de execução O(n). Isso significa que praticamente todo o Array será afetado.
- Não (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) */