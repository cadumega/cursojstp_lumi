//Declaração de função clássica, mais literal, ocorre (Function hoisting - eleva para o topo do nosso js a fç)
// Poderia adicionar parâmetros ou retornar um valor, mas já estou fazendo a execução da fç na tela.

falaOi();



function falaOi() {              //a declaração é elevada, não faz diferença criar antes ou depois
  console.log(('Oi.'));
};


//First-class objects (Objetos de primeira classe.), tratar fç como dado
//Function expression , minha variável recebeu uma fç e passou a ser uma fç.
//Agora posso jogar a variável como parametro deo utra função e fazer a outra função executar esse parametro
//Posso nomea-las se quiser ou deixar anônima,  const souUmDado = function nomeDaFuncao () , não é comum

const souUmDado = function () {        
  console.log('Sou um dado.');
};

souUmDado();

function executaFuncao(funcao) {
  console.log('Irei executar a função da variável criada abaixo:');
  funcao();
};

executaFuncao(souUmDado)

// Arrow function , declaração de função expression mais curta
const funcaoArrow = () => {
  console.log(('Sou uma arrow function.'));
};

funcaoArrow();

// Dentro de um objeto  ,  jogar uma função como método de um objeto
const obj = {
  falar: function () {
    console.log('Estou falando...');
  }
};
obj.falar();

//= 

const obj2 = {
  falar() {         // Criar o método sem a palavra function e sem os : , falar já é um método dentro do objeto
    console.log('Estou falando novamente...');
  }
};
obj2.falar();



