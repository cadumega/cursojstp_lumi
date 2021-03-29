/* O valor de uma propriedade pode ser uma função, que é então considerada um método do objeto. Além dos objetos que são pré-definidos no browser, você pode definir seus próprios objetos.
Objetos em JavaScript são como objetos na vida real, ou seja, são entidades independentes com propriedades e tipo.
Assim, na vida real, um carro é um objeto e possui propriedades como peso, altura e cor, e métodos como ligar, parar, brecar, acelerar, etc. */

var pessoa  = { nome : "José Carlos" , sobrenome = "Macoratti" ,  idade = 45 , sexo = "masculino"};

/* Dessa forma, um objeto em JavaScript tem propriedades associadas a ele, e uma propriedade de um objeto pode ser explicada como uma variável que é ligada ao objeto.
Ex:  nomeDoObjeto.nomeDaPropriedade
As propriedades de objetos em JavaScript podem também ser acessadas ou alteradas usando-se a notação de colchete( [ ] ).
Objetos : Métodos
Os métodos são ações realizadas pelo objeto.
Os métodos são armazenados nas propriedades dos objetos como funções definidas.
Exemplo :  Definir o método NomeCompleto para o objeto Pessoa: */

function() {return this.nome + " " + this.sobrenome;}

/* Podemos ainda criar um objeto em duas etapas :
Definindo o tipo de objeto escrevendo uma função construtora;
Criando uma instância do objeto usando a palavra new; */

function Carro(tipo, modelo,cor) {
	this.tipo = tipo;
	this.modelo = modelo;
	this.cor = cor;  
}
var meuCarro = new Carro("Ford" , "Fiesta" , "Prata");

// Criamos o objeto meuCarro definindo as propriedades tipo como Ford, modelo como Fiesta e cor como igual a Prata.

/* 
Objeto : Acessando propriedades
Podemos acessar as propriedades dos objetos de duas maneiras:
Usando a notação de ponto  	: nomeDoObjeto.Propriedade;    	Ex: pessoa.nome;
Usando a notação de colchetes :  nomeDoOjbeto["Propriedade"];   Ex:  pessoa["nome"];
Usamos o acesso às propriedades para obter o valor de um propriedade ou alterar o seu seu valor:

Objeto : Acessando métodos
Podemos acessar os métodos de um objeto usando seguinte sintaxe:   nomeDoObjeto. */NomeDoMetodo()   Ex:  pessoal.NomeCompleto()

/* Assim, um método estará sempre associado a um objeto no documento.
De forma geral, com JavaScript os métodos são usados para alterar o valor de uma propriedade ou executar tarefas específicas.
 */