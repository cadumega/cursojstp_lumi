// Polimorfismo - métodos se comportarem com subclasses, classes = função construtora

/* 
na aula de herança, o call seta o this para quem tiver no primeiro parâmetro... Por exemplo:

function funcaoQualquer() {
  console.log(`Oie eu sou ${this.nome}`);
}
funcaoQualquer();
// Saída: Oie eu sou undefined
Aqui o this aponta para o objeto global, por isso a saída foi "Oie eu sou undefined".

Com o call, posso fazer o this apontar para outro objeto, exemplo:

function funcaoQualquer() {
  console.log(`Oie eu sou ${this.nome}`);
}
 
const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio'
}
 
funcaoQualquer.call(pessoa)
// Saída: Oie eu sou Luiz
Se tivesse argumentos, passaria por vírgula na frete... Ex:

function funcaoQualquer(idade, peso) {
  console.log(`Oie eu sou ${this.nome} ${this.sobrenome}`);
  console.log(`Peso ${peso} e tenho ${idade} anos`)
}
 
const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio'
}
 
funcaoQualquer.call(pessoa, 80, 23)
// Saída: 
// Oie eu sou Luiz Otávio
// Peso 23 e tenho 80 anos
Apply faz exatamente o mesmo, porém recebe os argumentos em um array:

function funcaoQualquer(idade, peso) {
  console.log(`Oie eu sou ${this.nome} ${this.sobrenome}`);
  console.log(`Peso ${peso} e tenho ${idade} anos`)
}
 
const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio'
}
 
funcaoQualquer.apply(pessoa, [80, 23])
// Saída: 
// Oie eu sou Luiz Otávio
// Peso 23 e tenho 80 anos
Bind também tem a mesma função, mudar o comportamento do this para outro objeto.

function funcaoQualquer(idade, peso) {
  console.log(`Oie eu sou ${this.nome} ${this.sobrenome}`);
  console.log(`Peso ${peso} e tenho ${idade} anos`)
}
 
const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio'
}
 
funcaoQualquer = funcaoQualquer.bind(pessoa);
funcaoQualquer(80, 23);
// Saída: 
// Oie eu sou Luiz Otávio
// Peso 23 e tenho 80 anos
Essa é uma das tristezas do JS, ter 800000000 maneiras de fazer exatamente a mesma coisa.
*/