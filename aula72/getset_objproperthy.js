// defineProperty - defineProperties
// vamos criar uma fç construtora que crie um produto
/* 
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado =estoque;

  Object.defineProperty(this,'estoque', {           //similar ao freeze
      enumerable:true,   //mostra a chave
      configurable: true,   // posso apagar a chave ou reconfigurar a chave? se for true é configuravel, false no
      get: function () {      //método que irá me retornar o valor, pegar o valor e exibir
        return estoquePrivado;
      },
      set: function(valor) {
        if (typeof valor !== 'number') {
          console.log('Bad value');  //throw new TypeError('Mensagem');
          return
        }
        estoquePrivado = valor;
      }
  });     
}

const p1 = new Produto('Camiseta', 20, 3)
// console.log(p1);
p1.estoque = 'Qualquer coisa';    // se colocar 500, não terá o bad value
console.log(p1.estoque);

 */
// ex2____

function criaProduto (nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      valor = valor.replace(' coisa.' , '')     //substitui o coisa por vazio
      nome = valor;
    }
  };
}

const p2 = criaProduto ('Camiseta');
p2.nome = 'Qualquer coisa.'
console.log(p2.nome);