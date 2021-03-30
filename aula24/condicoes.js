//Estruturas condicionais
// Sistema que dependendo do horário ele irá retornar bom dia. Fora isso nada.
/* 
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa noite
Diferente dessas horas , retornar 
*/

// Condição foi satisfeita? Se sim faça isso, se não... faça aquilo. Blocos de chegagem.

const hora = 50;

if(hora >= 0 && hora <= 11) {         
  console.log('Bom dia.');            
  console.log('Tudo certo!');  

} else if (hora >= 12 && hora <= 17){  
    console.log('Boa tarde');

} else if (hora >= 18 && hora <= 23){                
  { console.log ('Boa noite');
  }      
  
} else {
  console.log('Olá, esse horário esta fora do parâmetro de horas.')
}

//Conclusões
// If pode ser usado só, else if preciso de um if, else preciso de um if.
// Posso ter vários else if nas condições, nas checagens.
// Só posso ter um else na checagem.

const tenhoGrana = NaN;   // false, ou qualquer valor que avalie false.. 

if(tenhoGrana) {
  console.log ('Vou sair de casa');
} else {
  console.log ('Não irei sair de casa.')
}

// Podemos usar condições sem else if, utilizando apenas if e else.
