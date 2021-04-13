// camiseta = Cor , caneca = material , lápis          
// representam produtos (q terão aumento ou desconto), criar fç que cria Produto

function Produto(nome,preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};
Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
};

//não quero reescrever a fç produto.. logo preciso executar o código prototype.. com new..:

function Camiseta (nome,preco,cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}

Camiseta.prototype.aumento = function(percentual) {
  this.preco = this.preco + (this.preco * (percentual/100) )
}

function Caneca (nome,preco,material) {
  Produto.call(this, nome, preco);
  this.material = material;
  this.estoque = estoque;

  Object.defineProperty(this,'estoque', {
    enumerable:true,
    configurable: false,
    get: function () {
      return estoque
    },

    set:function (valor) {
      if (typeof valor !== 'number') return;
      estoque = valor;
    }
  });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;      //precisa ter o construtor correto

const produto = new Produto ('Genérico' , 111)
const camiseta = new Camiseta ('Regata' , 7.5, 'Preta');
const caneca = new Caneca ('Caneca',13,'Plástico',15)
caneca.estoque = 100;

// camiseta.aumento(10);
console.log(caneca.estoque);
console.log(caneca);
console.log(camiseta);
console.log(produto);

/* 
Herança?
O termo "Herança" é muito usado para descrever que as características de um objeto são passadas para outro objeto. Assim como uma filha ou filho pode herdar características da sua mãe ou pai (geneticamente). Por isso estamos usando esse termo para descrever o comportamento desejado. Além disso, a maioria das literaturas, incluindo as documentações (como MDN) citam a palavra herança.

Vamos continuar usando o termo "Herança" até o final do curso, porém, Javascript não é uma linguagem que apresenta essa característica em específico, portanto não existe "herança" aqui. O que ocorre, na verdade, é "delegação". Esse seria o termo mais correto para descrever "Herança" em JS.

Quando fazemos algo como:

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}
 
Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};
 
function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;
Mais especificamente no trecho:

Camiseta.prototype = Object.create(Produto.prototype);
Estamos, claramente, falando que o Camiseta.prototype é um novo objeto vazio que tem como protótipo Produto.prototype. Dessa forma, estamos adicionando Camiseta.prototype na cadeia de protótipos de Produto. Por consequência, tudo o que não existir em Camiseta nem em Camiseta.prototype será delegado para Produto.prototype (e assim por diante até chegar no topo da cadeia de protótipos). Por isso vejo o termo delegação como mais adequado para este comportamento.

Novamente, vamos continuar usando o termo "Herança", mas achei que seria interessante que você soubesse disso neste momento. */