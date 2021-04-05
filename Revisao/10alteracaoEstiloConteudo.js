let element = document.querySelector('body');

element.style.backgroundColor = 'darkgray';
element.style.height = '200px';
element.style.width = '200px';

//Fazemos a seleção transformando em objeto. Acessamos as propriedades de style do css, separamos com cammel Case caso tenha traço em uma palavra composta. Adiciona o style na tag de body do html


// .outerHTML -  todo o HTML do elemento 
// .innerHTML - HTML interno, limpa o conteúdo anterior e substitui
// .innerText - todo o texto, sem tags

// app.innerHTML = 'Olá';
// app.innerText = 'Olá';


//ex3__________
//Quero criar âncora <a href='http//google.com'>Visitar Google</a>

let app = document.querySelector('div#app');

let link = document.createElement('a');
var textLink = document.createTextNode ('Visitar Google'); // criaria o texto do link 

link.setAttribute('href', 'http://google.com'); // criaria o link 
link.appendChild(textLink)   // método para colocar o textLink para dentro da tag <a>

//Agora preciso colocar o <a> dentro da tag #div
app.appendChild (link);

// <a></a>               Como se eu criasse uma tag vazia



//ex4____
// Excluir um elemento do html:    excluir a tag p Olá Cataline

//  var app = document.querySelector('div#app');   //JÁ ESTA DECLARADA EX ANTERIOR
var text = document.querySelector('div#app p');   //selecionei a div, depois a tag p

console.log(text);
// app.removeChild (text);            Irá remover a tag p"Olá Cataline."