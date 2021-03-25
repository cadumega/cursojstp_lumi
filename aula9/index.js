const nome1 = 'Luiz'; //String
const nome2 = 'Luiz'; //String
const nome3= `Carlos` //String
const num1 = 10;    //number
const num2 = 10.52; //number

let nomeAluno;  //undefined , declarei mas não atribui valor, não aponta para local nenhum na memória, valor nulo.
const sobrenomeAluno = null; //Não aponta para local nenhum, usuário não especificar nenhum valor ou cor em um site.
const boolean = false;  //Boolean = true or false (lógico)

const a = [1,2]
const b = a;
console.log (a,b);

b.push(3);         //adicionando 3 em a e b , apontei b para a , por isso que retorna com 3 em a e b.
console.log(a,b); // [1,2,3] [1,2,3]

let z = 2;
let x = z;
console.log (z,x);  // 2,2

z = 3;
console.log (z,x);  //3, 2