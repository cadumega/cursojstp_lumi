//  que exibir ou usar uma var que não existe ainda , pode ser perigoso pois exibe coisas internas ao usuário , 
// dentro do bloco try , tente executar isso aqui, caso ocorra erro pegue o outro bloco

// similar ao if e else..


/*
try{
console.log (naoExisto);
} catch(err) {
  console.log('naoExisto não existe')
  console.log(err);        // não é legal exibir esse erro, não mostrar erro completo.
}

*/

// se tipo de x for dif de number ou tipo de y diferente de number.
function soma (x, y) {       
  if (
  typeof x !== 'number' || 
  typeof y !== 'number'
  ) {
    throw new Error ('x e y precisam ser número.') //fç construtora, capturar e lança o error.
  }

  return x + y;
}

try {
  console.log (soma(1, 2))     //3
  console.log (soma('1', 2))   //captura o erro
} catch(error) {
  // console.log(error);           não é interessante que vc lançe esse erro ao usuário, lança alerta ou outra coisa mais amigável ao usuário
  console.log('Alguma coisa mais amigável pro usuário')
}
  

