// Se eu tenho um trecho de código que se repete várias vezes, transformar em fç e repetir qts vezes precisar, deixando mais organizado e otimizado.


function action() {
  return 100               // return, serve para retornar algum valor dessa fç
}

console.log(15 + action());


// Imagine a máquina de refri que ao colocar dinheiro, a máquina retorna uma lata de refri. Ou seja, você insere um valor e é retornado alguma outra coisa para você . No js passamos valores para uma fç, que chamaos esses valores de parâmetros.

//ex1

function sum(number1, number2) {
  return number1 + number2;
}

console.log(sum(10,50));


// O que passamos ao criar a função são parametros, mas quando passamos os vlaores desses parametros , serão os argumentos, argumeto (10) que preenche o número 1 e argumento (50) que preenche o número 2.

// escopo global vs escopo local 

function sum(number1, number2) {
  let result = number1 + number2; 
  return result;
}

console.log(sum(3,3));             // 6

let result = 'Qualquer coisa.'
console.log(result);

//ex.3
var car = '';

if (true) {
  car = 'BMW'
}
console.log(car);      // criei uma var global fora do escopo, para conseguir acessar ou usar let

