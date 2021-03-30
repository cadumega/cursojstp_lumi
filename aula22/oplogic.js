/*
Operadores Lógicos
&& -> AND -> E  (Todas as expressões precisam ser verdadeiras, para retornar true)
|| -> OR - > OU (Preciso de uma pelo menos verdadeira)
!  -> not -> NÃO
*/

// Para eu sair, preciso de dinheiro no bolso e estar com sol lá fora.
const expressaoAnd = true && true;
console.log(expressaoAnd);    //true


const expressaoOr = true || false;
const expressao2Or = false || false;
console.log(expressaoOr);           //true ,pelo menos uma com retorno verdadeira true
console.log(expressao2Or);          //false

// Suponha que o valor venha de uma base de dados.
const usuario = 'Luiz'; 
const senha = '12345';

// Usuario precisa ser restritamente igual a Luiz, vai dar true , check usuario.
const vaiLogar = usuario === 'Luiz';
console.log(vaiLogar);

//Check a senha, usuario e a senha determinados valores, para que o usuário logue no sistema
//                                   true                false
const doublecheckLogar = usuario === 'Luiz' && senha === '1234';
console.log(doublecheckLogar);   // false , irá retornar pois tem um valor falso com operador &&

/*
A negação inverte uma expressão;
*/

console.log(!false);   //estou negando o false, logo fica true. inverto o valor do false.
console.log(!!false);   // negar 2 vezes, volta para false.


