// return
// Retorna um valor, terminando a função

function soma(a, b) {
  return a + b;                        //posso capturar o valor em uma variável
}

function soma2(a, b) {
  console.log(a + b);
}
soma2(5, 2);

// console.log(soma(5,2));

//console log só exibe o que eu pedi

// Exemplo de fç que não retorna nada, mas faz algo útil

/* 
document.addEventListener('click', function () {
  document.body.style.backgroundColor = 'Gray';            //a partir do momento que eu clicar fica cinza
});
 */

//nome: nome,  sobrenome: sobrenome,

function criaPessoa(nome, sobrenome) {
  return {nome, sobrenome}
  }

  const pessoa1 = criaPessoa('Luiz', 'Otávio');
  const pessoa2 = {                                      //objeto literal
    nome: 'João',
    sobrenome: 'Oliveira'
  }        

  console.log(typeof pessoa1);
  console.log(typeof pessoa2);



  function falaPalavra(comeco) {
    function falaResto(resto) {
      return comeco + ' ' + resto;                           //  return do escopo interno
    }
    return falaResto;                       // return do escopo externo
  }

  const fala = falaPalavra('Olá');
  const resto = fala('mundo!');              
  console.log(resto);                       //para executar a function (), mas só executaria a linha
  // fç tipo boneca russa, tirando várias fç dentro de outras fç utilizando variáveis

  // = 

  function criaFrase(comeco) {
    function criaResto(resto) {
      return comeco + ' ' + resto;                          
    }
    return criaResto;                     
  }

  const texto = criaFrase ('Olá');
  console.log(texto('mundo!'));

  //ex2____ código repetindo as funções, posso evitar utilizando
/* 
  function duplica(n) {
    return n * 2;
  }

  function triplica(n) {
    return n * 3;
  }

  function quadriplica(n) {
    return n * 4;
  }

  console.log(duplica(2));
  console.log(triplica(2));
  console.log(quadriplica(2));
 */

//=

//    //fç criaMultiplicador recebe param multiplicado, fechamento CLOSURE

function criaMultiplicador(multiplicador) {
    return function (n) {
      return n * multiplicador;
    };
  }

  const duplica = criaMultiplicador(2);
  const triplica = criaMultiplicador(3);
  const quadriplica = criaMultiplicador(4);

  console.log(duplica(2));
  console.log(triplica(2));
  console.log(quadriplica(2));


  //Podemos retornar uma outra função, valores primitivos que é o mais comum, objeto,set interval

//=

/* 
function criaMultiplicador(multiplicador) {
  // multiplicador;
  function multiplicacao(n){
    return n*multiplicador;
  }
  return multiplicacao;

};

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

 */