// Problema de performance, com repetições de funções e métodos dentro de um Objeto pessoa por exemplo.

// Construtora -> molde (classe)  , para gerar novos objetos.
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => 'Original:' this.nome + ' ' + this.sobrenome;
}


//prototype linka com a instância, fará a mesma coisa caso crie outras variáveis.

Pessoa.prototype.estouAqui = 'hahaha';


//Objeto tem uma referência interna __proto___, que vem da fç prototypeda fç construtora. Procura primeiro dentro do objeto oficial , referência do pai dela. Todas as instâncias usarem esse método.

Pessoa.prototype.nomeCompleto = function() {
 return this.nome + ' ' + this.sobrenome;
};

//  Criando uma instância ,qd coloco new
const pessoa1 = new Pessoa('Luiz', 'Otávio'); // objetos que vem da fç Pessoa = Fç construtora
const pessoa2 = new Pessoa('Maria', 'A.'); // <-- Pessoa = Fç construtora
const data = new Data(); // <-Date => Fç construtora

console.dir(pessoa1);
console.dir(data);

// Os objetos utilizam o método do pai, que nem getFullYear().


// Cadeia onde o motor do js irá buscar os métodos
pessoa1 --> Pessoa.prototype --> Object.prototype