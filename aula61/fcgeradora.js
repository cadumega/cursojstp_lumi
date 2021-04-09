// Para em determinado local as funções geradoras. Um código que pode ser pausado, não entrega todos os valores de uma vez, pode ser bom para performance dependendo da situação.

// yield retorna um desses valores, já o return
/* 
function* geradora1() {
  //  Còdigo qualquer...
  yield 'Valor 1';
  //  Còdigo qualquer...
  yield 'Valor 2';
  //  Còdigo qualquer...
  yield 'Valor 3';

}

const g1 = geradora1();
console.log(g1.next().value);             //usar método next para eu conseguir ver o value
console.log(g1.next().value);              // valor por valor vai entregando


// ex2___
function* geradora2() {
  //  Còdigo qualquer...
  yield 'Valor 1';
  //  Còdigo qualquer...
  yield 'Valor 2';
  //  Còdigo qualquer...
  yield 'Valor 3';

}

const g2 = geradora2();                 // no for ,ele sabe aoende exatamente termina até o last valor
for (let valor of g2) {
  console.log(valor);
}

 */
// ex3____
/* 
function* geradora1() {
  //  Còdigo qualquer...
  yield 'Valor 1';
  //  Còdigo qualquer...
  yield 'Valor 2';
  //  Còdigo qualquer...
  yield 'Valor 3';

}

function* geradora2(){
  let i = 0;

  while(true) {
    yield i,
    i++
  }
}
const g2 = geradora2();        //Irá entregar valores sempre que eu pedir 
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

 */
// ex4___ fç geradora que delega a fç
function* geradora1() {
  //  Còdigo qualquer...
  yield 'Valor 1';
  //  Còdigo qualquer...
  yield 'Valor 2';
  //  Còdigo qualquer...
  yield 'Valor 3';

}

function* geradora2(){
  let i = 0;

  while(true) {
    yield i,
    i++
  }
}

function*geradora3() {
  yield 0;
  yield 1;
  yield 2;
}


function* geradora4() {      //qro delegar a fç geradora 4 na 3
  yield* geradora3();
  yield 3;
  yield 4;
  yield 5;
}

const g4 = geradora4();
for(let valor of g4) {     //     G3 | G4
  console.log(valor);        //0,1,2,3,4,5
}

// Pode ser string também  , ordme fe fç que são executadas em q uma depende da outra anterior
//ex5
console.log('######');

function*geradora5(){
  yield function () {
    console.log('Vim do y1');
  };

  yield function () {
    console.log('Vim do y2');
  };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();



// Se vier com return, a fç para e não executa o q tem mais abaixo.

/* Imagine generators como uma corrente, a partir do momento que você passou de um elo, não tem como voltar a trás, você só vai para a frente. A partir do momento que você chegou em determinado elo e foi fazer outra coisa, quando você voltar, vai estar exatamente no mesmo elo, nem pra frente, nem para trás dele.

Outra forma de imaginar isso é uma pausa... funções geradoras pausam sua execução a cada yield e sempre vão te entregar o próximo valor na próxima chamada. Simples assim. */

/* Entenda as bases!  O restante é tudo feito em cima disso/derivado abaixo.

function soma(x, y) {
  return x + y
}
 
const resultado = soma(10, 20)
console.log(resultado); */