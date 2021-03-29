//  Você define uma função usando a palavra-chave function seguida pelo nome da função e depois por parênteses () que podem incluir nomes de parâmetros separados por virgula: (param1,param2, etc...)

/* 

  function nome(parametro1, parametro2, parametro3) {
    // codigo
  } 
  
  */

  // Quando você chama a função você passa os valores usando argumentos que dentro da função se comportam como variáveis locais.


/* Uma função pode ser executada:

Quando ocorrer um evento
Quando ela for invocada por outro código javascript
De forma automática (auto-invocação) 

*/

// Uma função usa a instrução return para retornar um valor a quem a chamou. Veja como funciona:

/* function Multiplicar (a,b) {
  return a*b;
}

var x = Multiplicar (4,3);
console.log(x);                   //12 
*/

// Ao usar operador ()  estamos invocando a função obtendo o seu retorno. Sem usar o operador () obtemos o tipo function:

function ConverteFahrenheitCelcius(fahrenheit) {
  return (5/9) * (fahrenheit - 32);                 // FORMULA:      T(°C) = (T(°F) - 32) × 5/9
}

let resultado1 = ConverteFahrenheitCelcius;
console.log(resultado1)
console.log(typeof ConverteFahrenheitCelcius)
console.log("----------------------")
let resultado2 = ConverteFahrenheitCelcius(10);
console.log(resultado2)
console.log(typeof ConverteFahrenheitCelcius())           // -12.22222 , number

//As funções podem ser usadas como variáveis em fórmulas, atribuições e cálculos. Veja:
function ConverteFahrenheitCelcius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

var x = ConverteFahrenheitCelcius(88);
var texto = `A temperatura é ${x} Celcius`;
console.log(texto); 

/* 
Nunca esqueça que as variáveis declaradas dentro de uma função são variáveis locais e podem ser acessadas somente dentro da função.

Assim em JavaScript, funções são objetos e você pode trabalhar com funções como se fossem objetos. 
Por exemplo, você pode atribuir funções a variáveis, a elementos de matriz e a outros objetos.

Elas também podem ser passadas ​​como argumentos para outras funções ou retornadas dessas funções.
*/

function mensagem() {
  alert('Função JavaScript!');
}
console.log(typeof mensagem);             // function
console.log(mensagem instanceof Object);      //true

//Dessa forma em JavaScript uma função é de fato um objeto sendo que funções JavaScript são um tipo especial de objeto, chamado objetos de função.

//Agora, existe mais de uma forma de criar uma função em JavaScript, e uma delas é usando a sintaxe  'new Function'. Observe:

let soma = new Function ('a', 'b', 'return a + b');
console.log (soma (10,20) );
console.log(typeof soma);

//ou utilizando arrow function

let plus = (a , b) => a + b;
console.log(plus(10,20));   //30

//Atenção !!!  o tipo de function() é diferente de new function(). Veja :
const testeA = function Teste1() {}
const testeB = new function Teste2() {}

console.log(typeof testeA);  //function
console.log(typeof testeB);  //object