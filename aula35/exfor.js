const elementos = [
  { tag: 'p', texto: 'Frase 1' }, // 0       // criando objetos nas chaves
  { tag: 'div', texto: 'Frase 2' }, // 1
  { tag: 'footer', texto: 'Frase 3' }, // 2
  { tag: 'section', texto: 'Frase 4' }, // 3
];

// node não tem as partes do DOM.

//document.appendchild para adicionar no html ao final do elemento

/*
const container = document.querySelector('.container');     //seleciona apenas 1 elento
const div = document.createElement('div');  //preciso criar var que tenha todos os elemetnos

for(let i = 0; i < elementos.length; i++) {      //não posso colocar <= por causa do indice
  let { tag, texto } = elementos [i];         //destruturação do objeto
  let tagCriada = document.createElement(tag);
  tagCriada.innerHTML = texto;
  div.appendChild(tagCriada);
}

container.appendChild(div);
*/

/* 
const container = document.querySelector('.container');     //seleciona apenas 1 elento
const div = document.createElement('div');  //preciso criar var que tenha todos os elemetnos

for(let i = 0; i < elementos.length; i++) {      //não posso colocar <= por causa do indice
  let { tag, texto } = elementos [i];         //destruturação do objeto
  let tagCriada = document.createElement(tag);
  let textoCriado = document.createTextNode(texto);
  div.appendChild(tagCriada);

  tagCriada.appendChild(textoCriado);
  container.appendChild(div);
}
 */

// __ profissa mode

(function (){
  const elementos = [
      {tag: 'p', texto: 'Frase 1'},
      {tag: 'div', texto: 'Frase 2'},
      {tag: 'footer', texto: 'Frase 3'},
      {tag: 'section', texto: 'Frase 4'}
  ];
  const container = document.querySelector('.container');
  let tagHtml = '';

  for (let i = 0; i < elementos.length; i++){
       //desestruturando os 'elementos'
       let {tag, texto} = elementos[i];
       tagHtml += `<${tag}>${texto}</${tag}>`;

   }
  container.innerHTML += `<div>${tagHtml}</div>`;

}) ()