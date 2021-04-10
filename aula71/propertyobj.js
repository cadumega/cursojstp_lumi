// defineProperty - defineProperties
// vamos criar uma fç construtora que crie um produto

function Produto (nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  this.estoque = estoque;

  Object.defineProperty(this,'estoque', {           //similar ao freeze
      enumerable:true,   //mostra a chave
      value: estoque,     // valor da chave
      writable: false,    // pode alterar ou não o valor (false não poderei)
      configurable: false,   // posso apagar a chave ou reconfigurar a chave? se for true é configuravel, false no
  })     
  
   // + verboso, mas se for algo + sensível vale a pena ter mais categorias de configurações
  Object.defineProperties(this. {     
    nome: {
      enumerable:true,   
      value: nome,    
      writable: false,    
      configurable: false, 
    },
    preco: {
      enumerable:true,   
      value: preco,    
      writable: false,    
      configurable: false, 
    },
  })
}

const p1 = new Produto('Camiseta', 20, 3)
p1.estoque = 500;           //não deixar alterar o atributo da variável
console.log(p1);


//ex2_________ object.keys

console.log((Object.keys(p1)));

for(let chave in p1) {
  console.log(chave);
}



/* 
Enumerable true significa que a propriedade será listada quando tentarmos exibir as chaves do objeto;
Writable true significa que a propriedade poderá ser alterada;
Configurable true significa que será possível reconfigurar a propriedade.
Value é o valor da propriedade
Get é um getter (função) para obter o valor da propriedade e modificar se necessário
Set é o setter (função) para setar o valor da propriedade, podendo validar ou modificar o valor.

Isso tudo é chamado de property descriptor (descritor de propriedade em tradução livre), veja mais em

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties
 */