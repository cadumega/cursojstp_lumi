/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg. 
Tem 1.80 de altura e seu IMC é de 25.9259 
Luiz Otávio nasceu em 1991.
*/
const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80; 
let imc; // peso / (altura * altura)
imc = peso / (alturaEmM * alturaEmM);
let anoNascimento;
let anoatual = 2021;
anoNascimento = anoatual - idade;

console.log(nome, sobrenome,'tem' ,idade, 'anos, pesa' ,peso, 'kg.');
console.log('Tem', alturaEmM, 'de altura e seu IMC é de', imc,'.');
console.log(nome,sobrenome,'nasceu em',anoNascimento,'.');