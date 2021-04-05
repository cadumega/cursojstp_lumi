// método que executa uma ação após um período de tempo e continuará executando.
//Podemos simplificar a função intervalo , com uma fç nomeada com argumento ou arrowfunction

/* ex3

setInterval(() => {
  console.log('executou');
}, 2000);

 */


/* ex2

function doAction () {
  console.log('executou');
}

setInterval(doAction,3000);   //Não deixar com ()o doAction se não só irá executar essa linha e não executará mais.
 */



/* ex1
window.setInterval(function () {
  console.log('executou')
},3000); 
*/

// Irá executar apenas uma vez

function doAction() {
  console.log('executou');
}

setTimeout(doAction, 3000);