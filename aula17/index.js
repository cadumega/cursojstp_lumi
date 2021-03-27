//Funções
// criar função é que nem criar variável, regras similares, crio o nome e o corpo da fç

// function saudacao () {
//   console.log('Bom dia!');
// }

// saudacao();        // colocar entre parenteses pq quero q a fç seja executada.


// criar parâmetros , dentro de () para criar a variável, coloco o argumento/ o valor, posso passar qq valor

function saudacao (nome) {
  return `Bom dia ${nome}`;                                   // console.log(`Bom dia ${nome}!`);
                                             
}

const variavel = saudacao('Luiz');                 //quero salvar o q a função retorna na variavel
console.log(variavel);                      // undefined , não especificar

// existem fç que não retornam valor, mas fizemos uma que retorna no exemplo acima, pode ser reutilizado no code.


function soma(x,y) {
  const resultado = x + y;       //fç protegida dentro do escopo, não consigo acionar fora console.log(resultado);
  return resultado;             // engine encontra palavra return ,nada mais é executado. ex. console.log('Olá');
}                             //não posso redeclarar uma variável const 

const resultado = soma ('Luiz', ' Otávio')
console.log(resultado);
// console.log(soma(2,1));


// Isso é bem poderoso, pois ao criar um programa você cria várias funções que conversam entre si, trocam dados entre si e fazem ações, funções pequenas que fazem algo, executam algo. Conectar base de dados, alguma fç na tela.

// caso não especifique o valor fora do escopo, posso colocar dentro.
function soma (x = 1, y=1) {
  const result = x + y;
  return result
}

const result = soma ();
console.log(result);


// se eu especificar dentro do escopo os valores, e fora, assume os valores de fora.

function soma (x = 1, y=1) {
  const resulta = x + y;
  return resulta
}

const resulta = soma (4,2);    // 6
console.log(resulta);

// jogar uma função dentro de uma variável, criando uma função anônima, preciso colocar semicolon ; nesse caso!
// FÇ ANÔNIMA

const raiz = function (n) {
  return n ** 0.5;
};

console.log(raiz(9));

// Maneira mais modera, arrow function , não usamos mais a palavra function ,trocamos por  =>  (simbolo de seta)
// Vieram para simplificar o código, eliminamos a palavra return, posso eliminar os parenteses. SIMPLIFIQUEI

const raizQ = a => a ** 0.5;
console.log(raiz(16));

// Criamos funções pequenas que fazem uma fç espscífica.
