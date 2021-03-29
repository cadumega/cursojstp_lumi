/* São menos verbosas do que as funções tradicionais
Seu valor de this é definido à partir das funções onde foram definidas. Ou seja, não é mais necessário fazer bind() ou armazenar o estado em that = this;
http://www.macoratti.net/19/02/js_arrow1.htm
*/

/*  (argument1, argument2, ... argumentN) => {
       corpo da função
    }
*/

// const somaex1 = (numero1, numero2 ) => {
//   return numero1+numero2;
// }

// console.log(somaex1(100,200));  //300

//Se o corpo da função contiver apenas uma única instrução, você poderá omitir os parênteses e escrever tudo em uma única linha. No exemplo acima podemos fazer assim:

let somaex2 = (numero1 , numero2) => numero1 + numero2;
console.log(somaex2(100,200));   //300

/* Os parâmetros são passados ​​entre parênteses:
const MinhaFuncao = (param1, param2) => FazAlgumaCoisa(param1, param2)
Se tivermos um (e apenas um) parâmetro, podemos omitir completamente os parênteses:
const MinhaFuncao = param => FazAlgumaCoisa(param) 
*/


// As arrow functions permitem ter um retorno implícito, que são valores retornados sem ter que usar a palavar return. Isso funciona quando existe apenas uma instrução no corpo da função:

const MinhaFuncao = () => 'teste'
console.log(MinhaFuncao());     //teste


// ex 3
const carro = {
  modelo: 'Fiesta',
  fabricante: 'Ford',
  NomeCompleto: function() {
    return `${this.fabricante} ${this.modelo}`
  }
}
console.log(carro.NomeCompleto());  //Ford Fiesta