/* Anotações extras sobre os conteúdos */

//                params
function soma(valor1, valor2) {
  console.log(valor1 + valor2);
}

soma(1, 2);



//= ex2___
function somaReturn(v1, v2) {
  let resultado = v1 + v2;
  return resultado;
}
//                    atributos
let result = somaReturn(2, 5);          
console.log(result);                      //console.log(somaReturn(2,5));