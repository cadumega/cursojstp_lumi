// Object Date
// fç data é uma fç construtora, sempre começa com maiscula e com new
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

// const data = new Date();   // sem passar parametro, cria um objeto de data atual, várias fç nessa fç construtora

// const data = new Date(2021, 3);  //ano,mes,dia,hora,minuto,segundo,miles

/* 
const data = new Date('2021-04-20 20:20:20');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1);       //js começa com mês 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Dia semana', data.getDay());     // 0 é Domingo , 6 é Sábado

console.log(data.toString());
console.log(Date.now());            //1617167056872 , estou obtendo os milesimos de segundo a partir do marco zero 1970

let data1 = new Date(1617167056872);
console.log(data1);

 */

/* 
function zeroAEsquerda (num) {
  return num >= 10 ? num : `0${num}`  // retorna um numero, ao contrario disso retorna um zero a esquerda
}

function formataData(data){
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth());
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
} 

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
*/


const dia = new Array('Domingo', 'segunda', 'terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado',);
const mes = new Array('janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro')
const data = new Date();
 
console.log(`Hoje é dia ${dia[data.getDay()]} dia ${data.getDate()} de ${mes[data.getMonth()]} de ${data.getFullYear()} `);
