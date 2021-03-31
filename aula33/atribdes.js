const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
  endereco: {
    rua: 'Av Brasil',
    numero:320
  }
};
//  const nome = pessoa.nome;   //jogar em uma variável

// Atribuição via desestruturação, extrai do objeto o nome e cria uma variável com pessoa;
// const { nome: n = '', sobrenome, idade} = pessoa;  //essa chave qro q crie var teste, alterando nome da variavel
// console.log(n, sobrenome);

// const { endereco: { rua: r, numero}, endereco} = pessoa;  
// console.log(r,numero, endereco);

const { nome, ...resto} =pessoa;
console.log (nome,resto);   // nome Luiz, e o restante do objeto



const numeros = [1,2,3,4,5,6,7,8,9,10]
const [/*1*/,/*2*/, tres,/*4*/,/*5*/, seis,/*7*/,/*8*/, nove] = numeros;
console.log(tres, seis, nove);