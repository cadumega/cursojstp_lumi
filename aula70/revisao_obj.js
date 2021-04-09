// Criar objeto de forma literal , array literal feito com colchetes , construtores específicos

/* 
const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio'
};

const chave = 'nome';
console.log(pessoa[chave]);
 */
// console.log(pessoa.nome);                //acessando as chaves do objeto, notação de ponto
// console.log(pessoa['sobrenome']);        // + verbosa, notação de colchete


//ex____ Construtor de array e construtor de objeto

const pessoa1 = new Object();             // Object construtor
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';

const pessoa2 = {                        //literal
  nome: 'Luiz',
  sobrenome: 'Otávio'
};

delete pessoa1.nome;                //apagando a chave nome do pessoa1.
console.log(pessoa1, pessoa2);

console.log('______');
// métodos estarem dentro do objeto, temos algumas aplicações legais de se criar
// function dentro de objetos são métodos


const pessoa3 = new Object();             // Object construtor
pessoa3.nome = 'Carlos';
pessoa3.sobrenome = 'Mega';
pessoa3.idade= 30;
pessoa3.falarNome = function (){
  return(`${this.nome} está falando seu nome.`);
};
pessoa3.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

for (let chave in pessoa3) {
  console.log(pessoa3[chave]);     // console.log(chave);        //irá me dar as chaves da pessoa
}

console.log(pessoa3.getDataNascimento());             //1991


console.log('______');
// Não faz sentido criar um cadastro novo de cliente na mão toda hora, obeto literal daria mt trabalho. Ideal criar um molde padrão disso, como a factory function ou as constructor functions (padrões de projetos para escolher). Temos as classes também para realizar algo de forma mais simples.

//fç construtora
/* 
function criaPessoa(nome, sobrenome) {            //MOLDE
  return {
    nome, 
    sobrenome,
    nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    }
  };
}

const p1 = criaPessoa('Luis', 'Miranda');
console.log(p1.nomeCompleto());

console.log('______');
 */
//ex3___

function Pessoa (nome, sobrenome) {              //MOLDE      , Pessoa é o construtor
  this.nome = nome;
  this.sobrenome = sobrenome
//  Object.freeze  (this);     // Qq objeto não poderá ser alterado, travei o this, não posso alterar valores
}

const p2= new Pessoa ('Pedro', 'Davos')          //cria um novo Objeto e atrela a palavra this.
// p2 = 'Outra coisa'       // ISSO Nâo posso fazer, irá gerar erro pois estou alterando o endereco de memoria
Object.freeze(p2);         // travar o objeto, não pode alterar o objeto
p2.nome = 'Outra coisa';

const p3= new Pessoa ('Pedro', 'Davos')         

console.log(p2);
console.log(p3);




// p1 = (enderecomemoria) -> 'valor
// p1 = (endrecomemorioa) = {nome:'Outra coisa'}  
// p1 = (novoenderecomemo) 

