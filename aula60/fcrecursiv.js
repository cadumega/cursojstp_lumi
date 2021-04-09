/* Funções recursivas, que ela mesmo se chama de volta, muito similar as estruturas de repetição que fizemos com for e while */


function recursiva(max) {
  if (max >= 10) return;              // máximo maior que 10, para aqui com return  
  max++;                 //incremento +1, no meu max , chegando a 10 não chama o código de volta
  console.log(max);
  recursiva(max);                  //executa o código dela e se chama de volta.
}

recursiva(0)

console.log('#####');

// ex.2________ , se preocupar qd q ela deve parar. Tem um limite máximo limitado, chegando em determinado limite não executa mais, até 1000

function recursiva(maxim) {
  console.log(maxim);
  if (maxim >= 5) return;              
  maxim++;                
  recursiva(maxim);                 
}

recursiva(0)