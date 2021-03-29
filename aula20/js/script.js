const nome = 'Luiz';    // escopo global da var


function meuEscopo () {           
 const form = document.querySelector('.form');  
 const resultado = document.querySelector ('.resultado');

 const pessoas = [];
 function recebeEventoForm (evento) {
   evento.preventDefault();
   
   const nome = form.querySelector ('.nome');
   const sobrenome = form.querySelector ('.sobrenome');
   const peso = form.querySelector ('.peso');
   const altura = form.querySelector ('.altura');

   pessoas.push({                //criar o array pessoas , add esses dados dentro do objeto, um objeto por indice
     nome: nome.value,
     sobrenome: sobrenome.value,
     peso: peso.value,
     altura: altura.value,
   });

   console.log(pessoas);

   resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
 }

  form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();

// Sempre que precisar do input, vou precisar do .value na variavel, p/ pegar valor.



//  form.onsubmit = function (evento) {
//   evento.preventDefault ();
//   alert(1);
//   console.log('Foi enviado.');
//  };


/* Seleciona elementos como selecionamos class no css, ou nome da tag. No querry selector, posso selecionar pela class. 'form' nome da tag, pela classe '.form'  , ou seleiconar pela id '#nameid'. */              

// podemos colocar espiões, se acontecer algo fazer x
// usou sinal de = , precisa colocar ; ao final.
// quando o formulário for enviado, precisa mandar um alert (1)
// criando o  evento do form, que é o onsubmit recebe uma fç anônima (evento) fecha {}
// só que a página tem o evento de atualiza aut, previnir isso criar evento preventDefault

//addEventListener, no evento não precisamos do onsubmit, só colocar submit.


// let contador =1;
// function recebeEventoForm (evento){
//   evento.preventDefault();
//   console.log(`Form não foi enviado ${contador}`)
//   contador++;
// }
//   form.addEventListener('submit', recebeEventoForm)
// 
// meuEscopo();                       