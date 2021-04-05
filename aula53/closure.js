//  a closure é um simples escopo dentro da função que não muda.
// o escopo das funções externas que a função carrega com ela...


function retornaFuncao (nome) {
  return function () {            //fç anonima, sem nome
    return nome;
  };
}

const funcao = retornaFuncao ('Luiz');  //fecha o escopo com closure, o nome sendo Luiz
const funcao2 = retornaFuncao ('João'); //fecha o escopo com closure, o nome sendo Joao
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());      //executar fç ()
// acesso a 3 escopos de fç, interno mãe dela e o global