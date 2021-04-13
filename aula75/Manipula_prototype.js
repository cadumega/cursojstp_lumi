//new Object , objeto literal m -> Object.prototype

const objA = {
  chaveA = 'A'                              // __proto__: Object.prototype
};

const objB = {                           //possui a chave do ObjectA
  chaveB: 'B'                                        //__proto__: objA
}


const objC= new Object();                           //possui a chave do ObjectA
objC.chaveC = 'C';                                        //__proto__: objA



Object.setPrototypeOf (objB, objA);
Object.setPrototypeOf (objC, objA);           //fiz uma corrente de obj
console.log(objC.chaveA);



//ex2___  exemplos agora com fç construtora, não vamos criar métodos dentro do produto, vamos criar métodos dentro do prototype da fç.

function Produto (nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
  this.preco = this.preco - (this.preco * (percentual/100));
};

Produto.prototype.aumento = function(percentual) {
  this.preco = this.preco + (this.preco * (percentual/100));
};

const p1 = new Produto('Camiseta', 50);
/* p1.desconto(100);
p1.aumento(100);
 */

//Criar um produto que aproveito daquelas fç iniciais já criadas.
  //Criando um novo obj literal de produto.
const p2 = {
  nome: 'Caneca',
  preco: 15
};

Object.setPrototypeOf(p2,Produto.prototype);
p2.aumento(10);
console.log(p2);
console.log(p1);

const p3 = Object.create(Produto.prototype, {
  preco: {
    writable:true,
    configurable: true,
    enumerable:true,
    value:99
  },
  tamanho: {
    writable:true,
    configurable: true,
    enumerable:true,
    value:42
  },
});

p3;aumento(10);
console.log(p3);



/* 
Arrow functions não permitem alteração do this, por isso não funcionam em nenhum local onde o this precisa ser manipulado. O this na arrow function é sempre o this do local onde ela foi criada... Por exemplo:

const quemEhOthis = () => console.log(this);
quemEhOthis();
O this, nessa função varia de acordo com o local onde ela for criada. Uma vez definido, não será mais alterado.
 */