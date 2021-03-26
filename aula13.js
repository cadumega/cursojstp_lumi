//    Índice     01234567
let umaString = "Um texto";
let segundaString = 'O rato roeu a roupa do rei de roma.';


console.log(umaString.concat(' em um lindo dia',))  // faz exatamente o que o sinal de + faz
console.log(`${umaString} em um lindo dia`); //outra forma
// console.log (umaString.charAt(7)); //o
// console.log(umaString[0]);  //u  //pegar um elemento na posição x da string.

console.log(umaString.indexOf('texto'));  // 3   .palavra texto começa no índice 3
console.log(umaString.indexOf('Texto'));  //-1 não encontrou nada
console.log(umaString.indexOf('Um', 3));   //-1  Não tem Um depois da posição índice 3
console.log(umaString.lastIndexOf('m'));  //1
console.log(umaString.search(/x/)); //5
console.log(umaString.replace('Um','Outro'));  //Outro texto

console.log(segundaString.replace(/r/ ,'p'));   // só o primeiro r que foi substituido
console.log(segundaString.replace(/r/g ,'p'));   // flag g para alterar todos

console.log(umaString.length);  //8      começa com o zero a contagem 012345678

console.log(umaString.slice(3,8));  //texto   delimitar o que eu quero pegar, inicio e fim
console.log(umaString.slice(-3));  //xto   inverso, tamanho total da string - direita para esquerda.

console.log(segundaString.split(' '))  // caracter q quero dividir/separar, cada palavra em um índice de uma array.
console.log(segundaString.split(' ', 2))  // executar 2 vezes
 
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());
