// Saber manipular os eventos do DOM , clicar em um botão ,passar o mouse de algum elemento.
// Saber quando o evento acontece e fazer uma manipulação com js.

/* 
function sayHello() {               função nomeada
  alert('Hello Cataline.');
}
 */

//Boa Prática, maneira + utilizada sem misturar js com html
// função anônima   ,      //keypress , não precisa colocar on , nesse método

/* 
let button = document.querySelector('#app button')

button.addEventListener('mouseover', function () {     
  alert('Hello Cataline.') 
})    
 */

//ex2.
/* 
let button2 = document.querySelector('#app button');
var input = document.querySelector('#app input#idade')
button2.addEventListener('click', function () {     
  alert('Sua idade é: ' + input.value) 
})    
 */

//ex.3 , separar a função nomeando ela, e depois adicionar esse evento
//se colocar showAge() falo pro JS executar a fç só nessa linha, não ira fazer nada.

let button = document.querySelector('#app button');
var input = document.querySelector('#app input#idade')

function showAge(){
  alert('Sua idade é: ' + input.value)
      
}

button.addEventListener('click', showAge)     // fora do escopo