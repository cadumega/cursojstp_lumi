// Funções de Callback, ações que ocorrem ao finalizar uma ação
// Simular um timeout do zero
/* 
function rand(min = 1000 , max = 3000) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}
// console.log(rand());    //gera um número aleatório entre 1000 e 3000, criei essa fç para colocar o tempo rand

function f1 () {
  setTimeout(function(){            //simulando algo que demoraria para executar em x tempo
    console.log(('f1'));
  },rand());
  
}

function f2 () {
  setTimeout(function(){
    console.log(('f2'));
  },rand());
}

function f3 () {
  setTimeout(function(){
    console.log(('f3'));
  },rand());
}

f1();
f2();
f3();
console.log('Olá mundo!');       //1° a ser executado , por não estar com time out.
 */

// ex2_________
function rand(min = 1000 , max = 3000) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}
// console.log(rand());   

function f1 (callback) {
  setTimeout(function(){
    console.log(('f1'));
    if(callback) callback();
  },rand());
  
}

function f2 (callback) {
  setTimeout(function(){
    console.log(('f2'));
    if(callback) callback();
  },rand());
}

function f3 (callback) {
  setTimeout(function(){
    console.log(('f3'));
    if(callback) callback();
  },rand());
}

// f1(function () {
//   f2(function() {
//     f3(function(){
//       console.log('Olá mundo!');    //será executado só depois do f3 
//     });
//   });
// });

//=

f1(f1Callback);         // crio uma fç de f1Callback   , irei criar fç da fç para chamar

function f1Callback() {        //termino callbackf1 chama callback de f2
  f2(f2Callback);
}

function f2Callback() {           //termino callbackf2 chama callback de f3
  f3(f3Callback); 
}

function f3Callback() {            //termino f3, chama consolelog..
  console.log('Olá mundo');
}

//Parece com as fç que comparei o brinquedo de bonecas russas, uma dentro da outra.
//SOLUÇÃO MAIS SIMPLES!!! e Maneira mais limpa é com promisse menos verboso. [VERIFICAR + A FRENTE]