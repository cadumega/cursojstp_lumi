const a1 = [1,2,3];
const a2 = [4,5,6];
//                          const a3 = a1 + a2;
//concatenar da melhor maneira, seria com o métodod concat.

const a3 = a1.concat(a2);
console.log(a3);

console.log('####');

// const a4 = a1.concat(a2,[7,8,9], 'Luiz');

//...rest -> ... spread                  ,funciona para objeto também

const a4 = [...a1,'Luiz',...a2, ...[7,8,9]]
console.log(a4);

