// Seção5 : JavaScript Arrays(Avançado)

//                0         1            2
/* 
const nomes = ['Eduardo' , 'Maria' , 'Joana'];
nomes[2] = 'João';
console.log(nomes);

delete nomes[2];           //quero deletar sem alterar os índices, funcionam para string,objeto, fc , pouco usado
console.log(nomes);
 */

//=   outra forma construtora de array
/* 
const names = new Array('Eduardo', 'Maria' , 'Joana');
console.log(names);
 */

//ex2  , tirar last elemento
/* 
const nomesname = new Array('Joao', 'Silva' , 'Mega');
const novo = nomesname;

novo.pop();
console.log(nomesname);


 */

// ex3____
// pegar os elementos e colocar em outra array
console.log('####');


const nome = new Array('Joao', 'Silva' , 'Mega');
const novo = [...nome];           //spread , fiz uma cópia para novo

novo.pop();
console.log(nome);
console.log(novo);

// ex4___ adicionar + um elemento ao final da array
console.log('####');

const nomes2 = new Array('Joao', 'Silva' , 'Mega');
nomes2.push('Pedro');        //adiciona ao final
nomes2.push('Wallace');
nomes2.unshift('Ignaldo');        //unshift adicionando no inicio, pode trazer problema de performance
console.log(nomes2);


// ex5_______   Remover para verificar a array delimitada
console.log('####');

const integrantes = ['Eduardo', 'Maria' , 'Joana', 'Wallace', 'Rosana']
const nov = integrantes.slice (1,-1);         //removi 1 no inicio e 1 no final
console.log(nov);


// ex6_____ separar palavras com espaços.

const colaborador = 'Carlos Eduardo Lopes';
const novocolab = colaborador.split (' ');
console.log(novocolab);

//ex6.1 fazer o contrário

const colab = [ 'Carlos', 'Eduardo', 'Lopes' ];
const juntacolab = colab.join (' ');
console.log(juntacolab);











//splice faz tudo que essas funções fazem, e mais algumas coisas prox aula!!!!!

