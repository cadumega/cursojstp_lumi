//ex1____ argumentos que sustenta todos os argumentos enviados

function funcao () {
  console.log(arguments[0]);
}

funcao('Valor', 1 ,2 ,3);       //argumentos para suprir o valor do parametro, js não liga o que faz com param


//ex2_____  argumentos que sustenta todos os argumentos enviados, Não FUNCIONA para Arrow Function

function Soma (a, b, c) {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }
  console.log(total);                             //   console.log(total, a,b,c);
}

Soma(1 ,2 ,3);        //Argumento 1, param a ; argumento 2, param b ...


//ex3____ JS criou as variáveis, setou os parâmetros como undefined, não gera erro, mesmo divergindo o n° de args com param.

function Somatorio (a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f);
}
Somatorio(1, 2, 3);

// ex4____


function Somar (a, b) {
  b = b || 1
  console.log(a + b);
}
Somar(2);              //3
 

// =        maneira moderna para resolver
function somaCompleta (a, b = 1, c = 4) {
  console.log(a + b + c);
}
somaCompleta(2, null, 10);      // não posso colocar valor vazio, '' e nem 0, pois continua assumindo valor padrão no parâmetro. Colocar null ou undefined;


// ex5 ___ Atribuição via Desestruturuação
function form ({nome, sobrenome, idade}) {           //desestruturação
  console.log(nome, sobrenome, idade); 
}

form({ nome: 'Luiz', sobrenome: 'Otávio', idade: 20})

// = 

function form ({nome, sobrenome, idade}) {      
  console.log(nome, sobrenome, idade); 
}
let obj = ({ nome: 'Luiz', sobrenome: 'Otávio', idade: 20});
form(obj);

// =                        //desestruturação de array

function Formi ([valor1, valor2, valor3]) {      
  console.log(valor1, valor2, valor3); 
}
Formi(['Luiz Otávio', 'Miranda', 30] );


// ex6___

function conta(operador, acumulador,... numeros) {  //rest operator...os 3 pontos,resto dos args dps do acumulador
  for (let numero of numeros) {
  if ( operador === '+') acumulador += numero;                                      // console.log(numero);
  if ( operador === '-') acumulador -= numero;                                      // console.log(numero);
  }

  console.log(acumulador);
}
conta('+', 0, 20,30,40,50);

// =        // troquei o acumulador por 1, se não a conta ia ficar 0 ; e o operador!!!

function conta2(operador, acumulador,... numeros) {     
  for (let numero of numeros) {
  if ( operador === '/') acumulador /= numero;                                      // console.log(numero);
  if ( operador === '*') acumulador *= numero;                                      // console.log(numero);
  }

  console.log(acumulador);
}
conta2('*', 1, 2, 3, 4, 5);

// Parâmetros indeterminados, utilize o rest operator, caso vá fazer a conta deles
const contaX = (...args) => {
  console.log((args));
};
contaX('+' , 1, 20, 30, 40 , 50)