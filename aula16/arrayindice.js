// Uma lista, coleção de coisas. Adicionar elementos ao final é mais indicado ,pois no início você mexe com os números de índice do array, Logo push é melhor que unshift. Boa prática

// não é uma boa prática de programação ,misturar diferentes tipos de dados primitivos.
//const alunos = ['Luiz', 'Carlos', 'João', 'Maria', 1 , true, null];

//                  0         1        2       3              4       5
// const alunos = ['Luiz', 'Carlos', 'João', 'Maria'];   // Luiza , Eduardo

// console.log(typeof alunos);  // object   , objeto indexado , array é indexado automatic.
// console.log(alunos instanceof Array);  // alunos é uma instancia de ArraY? Retorna true or false. True , é array

// let colegas = ['Luiz', 'Carlos', 'João', 'Maria'];
// colegas = 123;

// console.log(typeof colegas);  
// console.log(colegas instanceof Array);   //false , pois é number

// alunos.push('Luiza');
// alunos.push('Eduardo');

// console.log(alunos[4]);
// console.log(alunos.slice(0,4)); //qro pegar do element 0 ao 3 , o last elemento não é incluido!!
// //[ 'Luiz', 'Carlos', 'João', 'Maria' ]

// console.log(alunos.slice(0,-2));  //eliminei os 2 ultimos da array

// console.log(alunos[50]);   // no js posso acessar um índice q não existe, retornando undefined quando não existe

// delete alunos[1];        // o elemento ficará vazio na array 
// console.log(alunos[1]);     //undefined

// const removido = alunos.pop ();   // elimino o last elemento da array, salvo o elemento que removi em uma variável
// console.log(removido);     // elemento salvo na variável

// const removidoIni = alunos.shift();      // elimino o 1° elemento da array, e salvo em uma variável
// console.log(removidoIni);   // guardei Luiz em uma variável
// console.log(alunos);         // printando no DOM, sairá Carlos, Joao,Maria.

// alunos.unshift ('Luiza');  // adiciona ao início da array
// alunos.unshift ('Paulo');  // adiciona ao início da array

//** */ alunos.push('Otávio');   // coloca um elemento ao final da minha array com essa função
//** */ alunos.push('Fábio');   // coloca um elemento ao final da minha array com essa função

// console.log(alunos.length); // para saber o tamanho da array

// alunos[alunos.length] = 'Luiza';  //adiciono ao final da array
// alunos[alunos.length] = 'Fábio';  
// alunos[alunos.length] = 'Luana';  

// console.log(alunos);   // substituo Luiz por Eduardo
// alunos[0] = 'Eduardo';
// alunos[4] = 'Luiza' // se não existe o índice 4, será criado, o problema é que deveria saber o tamanho da array


// console.log(alunos);
// console.log(alunos[0]);   // cada um desses índices representa um elemento


//Por este motivo abaixo, pode-se usar const com objetos mutáveis e ainda assim alterar seus valores internos. A única coisa que não vamos conseguir fazer é reatribuir o valor da variável.

// const array = [1, 2, 3, 4, 5];
// array.pop();
// array[0] = 1024;  //substitui o índice 0 da array
// console.log(array); // [ 1024, 2, 3, 4 ]

//const descreve uma variável que não pode ser reatribuída (com o operador de atribuição =). Depois de criá-la, não podemos fazer algo assim:
// const nome = 'luiz';
// nome = 'joão'; // Erro: Assignment to constant variable.

// Isso NÃO pode
// const array = [1, 2, 3, 4, 5];
// array = 'Legal'; // Assignment to constant variable.

/* Variáveis são como um apelido para um valor, uma espécie de alias para mencionar algum valor salvo na memória.

Já valores são os dados que realmente ficam salvos na memória e sustentam determinado tipo. Alguns tipos de valores são imutáveis, como number, string, boolean, undefined, null, symbol e bigint (os primitivos todos são imutáveis). Outros tipos são mutáveis, como arrays e objetos (objetos em geral são mutáveis, com exceção de null).

Valores mutáveis geralmente são estruturas de dados mais complexas que sustentam outros valores ou comportamentos internamente. Como é o caso do array, que pode ser composto por vários outros tipos de dados.

Quando usamos const com tipos primitivos, esse valor nunca mais poderá ser alterado. Nesse caso, além de const não permitir reatribuição, o valor também é imutável (consequentemente, nunca podemos alterar essa constante).

Já quando usamos const com valores mutáveis (como arrays e objetos), a variável continua sendo constante, porém os valores dentro do objeto poderão ser alterados. Isso acontece porque quando alteramos um valor interno de um objeto, não ocorre a reatribuição da variável com sinal de atribuição = (a variável continua apontando para o mesmo local na memória), apenas a alteração de um valor interno do mesmo objeto. */