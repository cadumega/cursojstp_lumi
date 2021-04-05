/* 
const nome = 'Luiz';

function falaNome() {
  console.log(nome);
}
falaNome();           
 */

// fç conhece o local onde foi declarada e os vizinhos dela, sua bolha, busca no pai do pai ,até chegar na var de escopo global - ESCOPO LEXICO .
// Programação mais funcional, pode ocorrer problemas

 // ex1___
 /*
const nome = 'Luiz';

function falaNome() {
  const nome = 'Otávio';    //fç buscou no escopo mais próximo
  console.log(nome);
}

function usaFalaNome() {
  falaNome();
}
usaFalaNome();    // Otávio
 */


//ex1.2____
const nome = 'Luiz';

function falaNome() {
  console.log(nome);
}

function usaFalaNome() {
  const nome = 'Otávio';    
  falaNome();
}
usaFalaNome();    // Luiz

//ao executar ela irá lembrar quem são os vizinhos dela, caracterizando o escopo lexico ao lembrar da declaração onde foi criada. Não mexe no contexto léxico.

