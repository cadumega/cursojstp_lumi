// Não tão utilizado mas precisa saber essa estrutura.
// Se a variável é igual a, se é igual a ouro valor, pode usar switch case
function getDiaSemanaTexto(diaSemana) {
 let diaSemanaTexto;

  switch(diaSemana) {
    case 0:
      diaSemanaTexto = 'Domingo';               //switch precisa de break para parar de executar a checagem
      return diaSemanaTexto;            // encontrou a palavra return, sai da função, mesmo papel que o break
    case 1:
      diaSemanaTexto = 'Segunda';               
      return diaSemanaTexto; 
    case 2:
      diaSemanaTexto = 'Terça';               
      return diaSemanaTexto; 
    case 3:
      diaSemanaTexto = 'Quarta';               
      return diaSemanaTexto;
    case 4:
      diaSemanaTexto = 'Quinta';               
      return diaSemanaTexto;
    case 5:
      diaSemanaTexto = 'Sexta';               
      return diaSemanaTexto;
    case 6:
      diaSemanaTexto = 'Sábado';               
      return diaSemanaTexto;
    default:
      diaSemanaTexto = ''; 
      return diaSemanaTexto;                 
  }
}
const data = new Date ();
const diaSemana = data.getDay();          // pegar a data de hoje, 0 é dom , usuário não vai querer ver retorno 3
const diaSemanaTexto = getDiaSemanaTexto (diaSemana);

console.log (diaSemana, diaSemanaTexto);

/*
switch(diaSemana) {
  case 0:
    diaSemanaTexto = 'Domingo';               //switch precisa de break para parar de executar a checagem
    break;                              //NÃO ESQUECER a palavra break!! Se não pode checar errado., bloco case0
  case 1:
    diaSemanaTexto = 'Segunda';               
    break;
  case 2:
    diaSemanaTexto = 'Terça';               
    break;
  case 3:
    diaSemanaTexto = 'Quarta';               
    break;
  case 4:
    diaSemanaTexto = 'Quinta';               
    break;
  case 5:
    diaSemanaTexto = 'Sexta';               
    break;
  case 6:
    diaSemanaTexto = 'Sábado';               
    break;
  default:
    diaSemanaTexto = '';                    //no switch temos o default como else, funciona do mesmo jeito
}
*/

/*

if (diaSemana === 0) {                            // dia da semana é igual a , caso perfeito apra usar switch
  diaSemanaTexto = 'Domingo';
} else if (diaSemana === 1) {
  diaSemanaTexto = 'Segunda';
} else if (diaSemana === 2) {
  diaSemanaTexto = 'Terça';
} else if (diaSemana === 3) {
  diaSemanaTexto = 'Quarta';
} else if (diaSemana === 4) {
  diaSemanaTexto = 'Quinta';
} else if (diaSemana === 5) {
  diaSemanaTexto = 'Sexta';
} else if (diaSemana === 6) {
  diaSemanaTexto = 'Sábado';
} else {                                          // nenhuma condição entre 0 a 6
  diaSemanaTexto = '';
}


*/
// console.log (diaSemana, diaSemanaTexto);
