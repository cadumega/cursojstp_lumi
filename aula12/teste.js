let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

[varA, varB, varC] = [varB, varC, varA]
// [varA, varB, varC] = [1, 2, 3]   Um valor na ordem, varA = 1° , varB= 2°... 
//varA = preciso que seja igual o valor do 2°
//varB = preciso que seja igual o valor do 3°
//varC = preciso que seja igual o valor do 1°
//logo.. [varB, varC,varA]

console.log (varA, varB, varC);  //B , C , A 


