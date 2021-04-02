// diferença de cara é que a variável foi criada fora

/*
let i = 0;              // var de controle
                      
while (i <= 10) {         //temos a condição  , ao chegar no 11 ele avalia como falso
  console.log(i);        
  i++;               //Não esquecer de atualizar a var de controle, se não laço infinito
}

console.log('Segue a vida..');
*/

/* 
const nome = 'Luiz';

let p = 0;

while (p <= nome.length) {
  console.log(nome[p]);
  p++;
}
console.log('Segue a vida 2..');
 */

function random (min, max) {
  const r = Math.random () * (max - min) + min;
  return Math.floor(r);
}

//EVITAR repetir o seu código!!

const min = 1;
const max = 20;                     // gerar um número aleatório entre x e y
let rand = random (1,20);           //usei let pq irá atualizar o valor do laço, se for 10 não executa
// console.log(rand);
while (rand !== 10) {              // parar quando chegar no 10 , quando for diferente de 10 executa laço
  rand = random (min, max);     
  console.log(rand);
}

// while checa a condição e executa o laço
// do while , executa o código primeiro e depois checa a condição, executa uma vez sempre pelo menos.

console.log('#####')
do { 
  rand = random (min, max);     
  console.log(rand);
} while (rand!==10);



