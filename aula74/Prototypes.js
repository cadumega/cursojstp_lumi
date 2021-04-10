// Construtora -> molde (classe)  , para gerar novos objetos.
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

//  Criando uma instância ,qd coloco new
const pessoa1 = new Pessoa('Luiz', 'Otávio'); // objetos que vem da fç Pessoa = Fç construtora
const pessoa2 = new Pessoa('Maria', 'A.');  // <-Pessoa = Fç construtora


console.dir(pessoa1);
console.dir(pessoa2);
 