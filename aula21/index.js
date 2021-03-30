/* 
Operadores de comparação 
> maior que
>= mauir que ou igual a
< menor que
<= menor que ou igual a
== igualdade (valor) *****
=== igualdade estrita (valor e tipo)
!= diferente (valor)
!== diferente estrito (valor e tipo)
*/

const comp = 10 > 5;
console.log (comp);     // true

const comp2 = 10 >= 10;
console.log (comp2);    //true

const num1 = 10;
const num2 = 10;
const comp3 = num1 < num2;
const comp4 = num1 == num2;
console.log (comp3);       // false
console.log (comp4);       // true

const numb1 = 10;
const numb2 = '10';            // não faça conta ocm string, faça a conversão você mesmo
const comp5 = numb1 === numb2
const comp6 = numb1 !== numb2
console.log(comp5);             // false
console.log(comp6);             // true 

