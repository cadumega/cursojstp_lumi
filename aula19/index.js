// Dados Primitios são imutáveis, não podemos modificar. SAO COPIADOS somente.
// REFERENCIADOS são Array, object, function 

//Nesse caso trocamos o valor da variável, e não o o tipo primitivo.
// let nome = 'Luiz';
// nome = 'Otávio';
// console.log(nome);

// let nome = 'Luiz';
// nome [0] = 'R';
// console.log(nome[0], nome);


// let a = 'A';
// let b = a;         //Cópia , mas mantém o valor A independente se a mudar.
// console.log (a,b);


// a = 'Outra coisa';
// console.log (a,b);

let a = [1,2,3];
let b = a;           // b aponta/linka/referencia para o mesmo caminho de memória de  A
let c = b;             
console.log(a, b);      // caso altere a ou b, modifico os dois.

a.push(4);
console.log(a,b);

b.pop();
console.log(a,b);

a.push('Luiz');
console.log(c);

// Temos uma distinção, q vai depender se o valor será passado por referência ou copiado
// Nesse caso os primitivos são os valores copiados , os de referência são passador por referências no mesmo valor da memória, b referencia o mesmo valor de memória que a.

//Caso não queira referenciar e sim copiar:
let x = [1,2,3];
let y = [...x];    //estou fazendo um spread, em que x foi copiado para y, x indepen
let z = y;             
console.log(x, y);   


x.push(4);
console.log(x,y);  // y copiou x já e atribuiu os valores, não aceita mudar

y.pop();
console.log(x,y);

x.push('Luiz');
console.log(z);

//Criar um objeto

const o = {
  nome:'Luiz',
  sobrenome: 'Otávio'
};
const p = o;        // p referencia o 
                    //alterar o comportamento const p = {...o} , valor o manter Luiz
o.nome = 'João';   
console.log(p);
console.log(o);