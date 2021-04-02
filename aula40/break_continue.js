// break e continue, pular o laço ou continuar , funciona em todos os laços

/* 
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let n of numeros) {

  if ( n === 2 || n === 5) {      // encontrando o 2ou5, pula para prox interação do laço ñ mostrando
    continue;
  }
  // console.log(n);                       //caso queira pular uma execução da interação
}


const number = [1, 2, 3, 4, 5];

for (let m of number) {

  if ( m === 2 ) {      
    continue;
  }

  if (m === 3 ){
    continue;         
  }
  console.log(m);          //1 4 5
}                     
 */

// Break melhora a velocidade do seu código, se achar o número X sai do laço, para o laço. Vimos em switch. Sai do bloco.
/* 
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let m of number) {

  if ( m === 2 ) {      
    continue;              // vai até o final
  }
  console.log(m);       

  if (m === 7 ){
    console.log('7 encontado, saindo..')
    break;                  // não irá fazer toda interação
  }
}   
 */
//_______
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numeros.length; i++) {
let numero = numeros [i];

if ( numero === 2 ) {      
  continue;            
}
console.log(numero);       

if (numero === 7 ){
  console.log('7 encontado, saindo..')
  break;                  
}
}   
