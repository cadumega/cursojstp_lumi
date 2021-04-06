//retorna um objeto literal com nome e sobrenome 
//Factory function (Função fábrica)

function criaPessoa (nome,sobrenome) {
  return {
    nome, 
    sobrenome,
    fala(assunto) {                                     //=    fala: function (assunto) {
      return `${this.nome} está ${assunto}.`
    }
  };
}

const p1= criaPessoa('Luiz' , 'Otávio');
const p2= criaPessoa('Maria' , 'Joaquina');
console.log(p2.fala('falando sobre JS'));

// fç dentro do objeto, chamamos de método
// dentro do objeto podemos receber parâmetros, na function criada

// peso is not defined, adicionando this executa corretamente, pq o this se refere a pessoa que chamou o que você executou, executamos o método , logo o this é o p1.

//Para que criar um método dentro de um objeto? 
/* 
console.log('###');
//ex2___

function criaPessoa (nome, sobrenome, a, p) {
  return {
    nome, 
    sobrenome,
    fala(assunto) {                                     //=    fala: function (assunto) {
      return `${this.nome} está ${assunto}.`
    },
    altura: a,
    peso: p,
    imc() {                                      //criando um método ()
        const indice = this.peso / (this.altura **2);
        return indice.toFixed(2);
    }
  };
}

const p3= criaPessoa('Luiz' , 'Otávio', 1.8, 80);
console.log((p3.imc()));
const p4= criaPessoa('Maria' , 'Joaquina', 1.6, 42);
console.log(p4.fala('falando sobre JS'));
 */
// ex3____

function criaPessoa (nome, sobrenome, a, p) {
  return {
    nome, 
    sobrenome,
    fala(assunto) {                                     //=    fala: function (assunto) {
      return `${this.nome} está ${assunto}.`
    },
    altura: a,
    peso: p,
    get imc() {          //Getter, só obter o valor               //criando um método ()
        const indice = this.peso / (this.altura **2);
        return indice.toFixed(2);
    }
  };
}

const p5= criaPessoa('Luiz' , 'Otávio', 1.8, 80);
console.log(p5.nome);
console.log(p5.sobrenome);
console.log(p5.imc);


// ex4____
function criaPessoa (nome, sobrenome, a, p) {
  return {
    nome, 
    sobrenome,

    //Getter
    get nomeCompleto(){
      return `${this.nome} ${this.sobrenome}`
    },

    //Setter
    set nomeCompleto(valor) {
      valor = valor.split (' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join (' ');
      console.log(valor);
    },

    fala(assunto) {                                     //=    fala: function (assunto) {
      return `${this.nome} está ${assunto}.`
    },

    altura: a,
    peso: p,
    get imc() {          //Getter, só obter o valor               //criando um método ()
        const indice = this.peso / (this.altura **2);
        return indice.toFixed(2);
    }
  };
}

const p6= criaPessoa('Luiz' , 'Otávio', 1.8, 80);
const p7= criaPessoa('João' , 'Ribeiro', 1.6, 60);
const p8= criaPessoa('Junior' , 'Lima', 1.7, 70);
// console.log(p6.nomeCompleto);
p6.nomeCompleto = 'Maria Oliveira Silva';
console.log(p6.nome);
console.log(p6.sobrenome);
console.log(p6.nomeCompleto);

console.log(p7.imc);
console.log(p8.imc);
