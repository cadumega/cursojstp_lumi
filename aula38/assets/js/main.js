// querySelector retorna um elemento, mas em alguns casos se for coleção como vários <p>

const paragrafos = document.querySelector ('.paragrafos');
const ps = paragrafos.querySelectorAll('p');   // se comporta de uma maneira similar as arrays



//ps[1];
//ps.length;
 
/*
for (let p of ps) {                             // for of , + simples!!!
  console.log(p);
}
*/



// estilos computados que o computador pegou do css style.
const estilosBody = getComputedStyle(document.body);     // carrega os estilos do body
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);               //rgb(65, 105, 225)

// Ex. colocar o fundo do <p> e colocar a cor branca da letra
for (let p of ps) {                           
  p.style.backgroundColor = backgroundColorBody;     // acessei o estilo do css e coloquei o backg.
  p.style.color = '#FFFF'                           // pode usar qq propriedade CSS com style
}                                                    
  

//CLEAN code ___

// const parag = document.querySelector('.paragrafos');
// const paragrafos = parag.querySelectorAll('p');
 
// const estilos = getComputedStyle(document.body); //Carrega os estilos do body
// const background = estilos.backgroundColor;
 
// for (let cor in paragrafos) {
//     paragrafos[cor].style.backgroundColor = background;
//     paragrafos[cor].style.color = 'white';
// }