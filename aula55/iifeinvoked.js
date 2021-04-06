// IIFE -> Imediately invoked function expression
//Funções imediatas, autoinvocadas, queremos fugir do escopo global , jogando informações dentro da function. Chamamos a fç criada imediatamente, só que precisamos dar o nome nela, ex abaixo:

function qualquerCoisa () {
  console.log(11123455);
}

qualquerCoisa();


//No caso de IIFE ,fç não terá nome, podemos envolver em parenteses.

(function (){
  console.log(12345);
  const nome ='Carlos'
  console.log(nome);
})();    

const nome = 'Qualquer coisa';

// chamo a fç imeadiatamente (), executado imediatamente sem tocar o escopo global.


//ex2___

(function (){           //Protegendo do escopo global

  const sobrenome = 'Miranda';
  function criaNome(nome) {
    return nome + ' ' + sobrenome;
  }
  function falaNome () {
    console.log(criaNome('Luiz'));
  }
  
  falaNome()
})();

//ex3____

(function(idade, peso, altura) {
  const sobrenome = 'Valle';
  function criaNome(nome) {
    return nome + ' ' + sobrenome;
  }
  
  function falaNome() {
    console.log(criaNome('Carol'));
  }
  falaNome();
  console.log(idade, peso, altura);

}) (30, 80, 1.80);                     //passei os argumentos

// Sintaxe de fç express imediata

(function() {

})();