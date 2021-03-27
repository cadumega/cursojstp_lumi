// const array = [1,2,3];            // se fosse let poderia alterar, reatribuir
// array.push(4);
// array[0] = 'Luiz';

// console.log(array);

// const nome01 = 'Luiz';
// const sobrenome01 = 'Miranda';
// const idade01 = 25;

// const nome02 = 'Maria';
// const sobrenome02 = 'Oliveira';
// const idade02 = 55;

// para criar Objeto literal, abro chaves { }  , array é colchetes [ ] , repito menos a palavra const e operador.

// const pessoa1 = {
//   nome: 'Luiz',
//   sobrenome: 'Miranda',
//   idade: 25
// };

// const pessoa2 = {
//   nome: 'Maria',
//   sobrenome: 'Oliveira',
//   idade: 55
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.idade);


// criar uma fç criaPessoa que irei receber nome,idade , dentro da fç vou dar um return para retornar obj literal.
// chamaos de fç factor , ela cria objetos, fabrica objetos . Dentro da fç é virgula, não precisa do semicolon

//  nome = nome, o js entende qd se tem valores iguais posso simplificar           
//  sobrenome = sobrenome,   diminuindo a função!

//        criando      atributos/parâmetros                nome,idade...    da fç
function criaPessoa (nome, sobrenome, idade) {
  return { nome, sobrenome, idade }
}

//qd envio um valor para os atrib/parâmetros, são:
//                              argumentos        da FÇ
const pessoa1 = criaPessoa ('Luiz', 'Miranda' ,25);  
const pessoa2 = criaPessoa ('Maria', 'Oliveira' ,32);  
const pessoa3 = criaPessoa ('João', 'Moreira' ,42);  
const pessoa4 = criaPessoa ('Junior', 'Lara' ,55);  
const pessoa5 = criaPessoa ('Jean', 'Otávio' ,69);  

console.log(pessoa1.nome, pessoa2.nome);


const pessoa7 = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,

  fala() {                   //criei um método() , que executa fç
    console.log(`A minha idade atual é ${this.idade}.`)
    //console.log (`${this.nome} ${this.sobrenome} está falando oi...`);
  },
  incrementaIdade () {
    this.idade++;            // peguei o valor de idade e somando +1, incrementa toda vez que chamar o método
  }
};

pessoa7.fala();
pessoa7.incrementaIdade();
pessoa7.fala();

// Dentro do objeto , tenho a palavra this, posso referenciar esse objeto e qq atributo do método




