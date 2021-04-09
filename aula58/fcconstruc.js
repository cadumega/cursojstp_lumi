// Fç fabrica e construtoras criam objetos . A construtora retorna objetos e alterar a convenção de ocmo escrevemos a fç, sempre iniciar com letra maiscula.

//Construtora -> Pessoa(new)         , são um molde para gerar novos objetos.

function Pessoa (nome, sobrenome) {                //fç construtora cammel case já
  this.nome = nome;                                      //this se referindo a Pessoa
  this.sobrenome = sobrenome;
  
  this.metodo = function () {
    console.log((this.nome + ': Sou um método'));
  };
}

// não esquecer a palavra new, pois ela cria um objeto vazio, faz o this apontar ao objeto vazio e retorna o objeto para a variável, sem precisar declarar o return.

const p1 = new Pessoa ('Luiz', 'Otávio');
const p2 = new Pessoa ('Carlos', 'Mega');

p2.metodo();


//ex1.2__________

//posso criar uma var dentro da function Pessoa, que usarei internamente.
//  fç factory , preciso colocar virgula. Já nas fç construtoras não preciso.

function Pessoa (nome, sobrenome) {                //fç construtora cammel case já
  const ID = 123456;                          //considerados atributos privados, não disponíveis fora

  const metodoInterno = function () {

  };
  
  //Atributos ou métodos públicos
  this.nome = nome;                                      //this se referindo a Pessoa
  this.sobrenome = sobrenome;
  
  this.metodo = function () {
    console.log((this.nome + ': Sou um método'));
  };
}

// não esquecer a palavra new, pois ela cria um objeto vazio, faz o this apontar ao objeto vazio e retorna o objeto para a variável, sem precisar declarar o return.

const p3 = new Pessoa ('Fernando', 'Otávio');
const p4 = new Pessoa ('Eduardo', 'Lopes');

p3.metodo();


/* Se eu uso o this dentro da função eu automaticamente torno o atributo ligado a ele público, e se não coloco o this ele automaticamente se torna um atributo privado.
É isso? Se sim, só funciona assim dentro da função construtora? ou na função fábrica é assim tbm?

Na função fábrica a gente geralmente não se preocupa com o this. O próprio escopo da função já é privado. */