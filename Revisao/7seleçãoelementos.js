//mostra tudo o que tem dentro do meu html, ver através do html
// console.log(window.document.body);

// obtenha o elemento que tenha tal Id
//            objeto    método        valor de atributo da id
// let input = document.getElementById('idade');



// pode ter vários elementos, utilizando essa mesma classe, retornando array, especifique o índice da array, sua posição
// let input = document.getElementByClassName('idade')[0];

// melhor maneira é com querySelector, mesmo seletor que usa no css
let input = document.querySelector('input#idade')

console.log(input.previousElementSibling); // elemento antes do input
console.log(input.nextElementSibling);


// Exibir os filhos da tag de lista, exibir seleção pelo DOM. Muitas possibilidades.
// Através desse seletor que iremos fazer as seleções !!!
let list = document.querySelector('div#app ul')

console.log(list.children[1]);


document.getElementById // seleciona por ID
document.getElementByTagName // seleciona por TAG
document.getElementByClassName // seleciona por Class
document.querySelector() // seleciona por seletor específico
document.querySelectorAll() // seleciona todos por seletor específico

.parentElement //pai
.parantElement.parentElement //pai do pai
.previousElementSibling // elemento anterior
.nextElementSibling // elemento seguinte
.children //HTMLCollection com os filhos
.children[0] //primeiro fiilho

