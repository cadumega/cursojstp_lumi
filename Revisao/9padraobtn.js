// Comportamento padrão do formulário e do botão, atualiza a página ao você clicar no botão
// Reenvia o formulário, apaga rapidamente o que você colocou.
// Precisamos previnir esse comportamento padrão do navegador, toda fç executada baseada em um evento pode receber um parametro, esse parametro é um objeto que disparou a fç

// ex1

/* 
let button = document.querySelector('#app button');
var input = document.querySelector('#app input#idade');

button.addEventListener('click', function(event) {
  event.preventDefault()             //habilitei NÃO recarregar a página
  console.log('Sua idade é:' + input.value)     

})   
 */ 

// defaultPrevented: false , precisa estar habilitado

//ex2.

let link = document.querySelector('#app a');

link.addEventListener('click', function(event) {
  event.preventDefault()            
  console.log('Foi clicado.')     

})   