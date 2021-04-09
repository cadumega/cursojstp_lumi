// Só esta disponível dentro de arrays o foreach , sabemos quantos laços iremos fazer interações

const a1 = [10,20,30]
const a2 = [100,200,300,400,500,600,700,800,900]

a1.forEach(function (valor,indice,array) {
  console.log(valor,indice);
})


//ex2___
a2.forEach(valor => console.log(valor));

//ex3___
console.log('______');

let total = 0;
a1.forEach (valor => {
  total += valor;
});

console.log(total);

/* 
for (let valor of a1) {
  console.log(valor);
}
 */

// Parece uma união com for of, for in