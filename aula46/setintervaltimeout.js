//Criando uma fç que mostra a hora
//####REVER ESSA AULA!##########


function mostraHora() {
  let data = new Date ();

  return data.toLocaleTimeString('pt-BR', {
    hour12:false
  });
}

// console.log(mostraHora());

const timer = setInterval (function () {
  console.log(mostraHora());
}, 1000);

setTimeout(function() {
  clearInterval(timer);
}, 3000);

setTimeout(function() {
  console.log(('Olá Mundo!'));
}, 5000);




















/*Chamar a função você quer executar ela no exato momento da chamada. Por referência você quer passar a função para outro local pra ela ser executada posteriormente.

setInverval e setTimeout são funções de palavras reservadas no javascript? Naquela parte de colocar os ms(milissegundos), de quanto em quanto tempo a hora vai aparecer, é específico dessa função colocar algum número alí?

Sim, são funções do JS, então estão disponíveis no nodejs e no browser. Os ms são os milésimos de segundos que você envia, a data e/ou hora vai aparecer no intervalo que você descrever com ms.

Por exemplo, se você falar:

setInterval(function () {
  const date = new Date();
  console.log(
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds(),
  );
}, 500);
Você vai ver horas, minutos, segundos e ms de 500 em 500 ms. Isso não é totalmente preciso, os ms podem divergir um pouquinho.

*/