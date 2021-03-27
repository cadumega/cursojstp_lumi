
// Pessoa
// Elson comprou um carro, ele ta muito feliz.
// de quem estamos falando? Elson , e o ele? ELson  . 

// Posso usar Elson ou ele, semelhante ao js ,
// podemos referenciar pelo nome ou THIS


// This - Dele - Dela, Ele, Ela

// abaixo podemos usar ninja ou o nome do objeto que é this, define o mesmo objeto
let ninja = {
  nome : 'mike',

  atacar:function(){
    console.log(`${this.nome} arremesou sua espada`)        //${ninja.nome}
  }
}

ninja.atacar();

// Só que ao pegar um método de um objeto e atribui a uma variável , mais avançado
// Atribuir um metodo de um objeto a uma variavel o this passa a se referir ao 
// dono da variavel que é quem invoca o metodo e nao o objeto que definiu o metodo

// Um objeto usa o metodo de outro

//undefined, chamar esse método , a menina tem a propriedade     
//nome mas o objeto não tem a propriedade nome

//Mudar o contexto de uma função, associar o this a outro objeto

let menina = {
  nome:'Cristina',

  falar: function () {
    console.log('Olá meu nome é' + ' ' + this.nome);
  }
}

menina.falar ();

let nome = 'janela';
let dizer = menina.falar;
dizer();      

dizer.call(menina);   // podemos usar um método em outro objeto, aponta dnovo p/menina


// PEDIR EMPRESTADO O METODO DE OUTRO OBJETO

let carro = {
  numero:400,
  mostrarNumero:function(){
    console.log(this.numero);
  }
}

carro.mostrarNumero();

var moto = {
  numero:100,
                       // mostrarNumero:function(){
                       //   console.log(this.numero);
  }
                      // }


moto.mostrarNumero();

carro.mostrarNumero.call(moto);