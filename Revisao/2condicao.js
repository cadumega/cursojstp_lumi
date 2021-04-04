//ex1
var isActive = true;             // True - condição satisfatória || False - Insatisfatório
var message1 = '';

if (isActive) {
  message1 = 'Está ativo.';            // Se true message recebe 'Está ativo'
} else {
  message1 = 'NÃO está ativo.';
}

console.log(message1);
console.log('##########');

//ex2

let trafficLight = 'amarelo';      // 'verde' , 'amarelo', 'vermelho'
let message = '';

if (trafficLight == 'verde') {          // 2 sinais de == é igualdade, e não o recebe de atrib =
  message = 'Pode passar';
} else if (trafficLight == 'vermelho') {
  message = 'Pare';
} else if (trafficLight == 'amarelo') {
  message = 'Atenção';
} else {
  message = 'Valor inválido';
}

console.log(message);
console.log('##########');

//ex2.1
// Utilizando a sintaxe switch, dentro de () colocamos as variáveis de comparações com case.
// Executa todas as condições com switch, o valor final de msg é o inválido ,preciso informar que qd ele encontrar um valor satisfatório , parar o código para não realizar as outras verificações. Colocar o break .

switch (trafficLight) {
  case 'verde':
    message = 'Pode passar'
    break;
  case 'vermelho':
    message = 'Pare';
    break;
  case 'amarelo':
    message = 'Atenção';
    break;
  default:
    message = 'Valor inválido'
    break;
}

console.log(message);

