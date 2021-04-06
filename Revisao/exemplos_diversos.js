// Acho que você está pensando na estrutura de dados errada... Sempre que pensar em "muitos" (muitos objetos, muitos usuários, etc...) você quer é um array... Pode ser um array de objetos... Assim você poderia filtrar, mapear, apagar, adicionar mais um... etc... Mais ou menos isso com base no seu código...

function novoUsuario(nome, idade, sexo) {
  return {
    nome,
    idade,
    sexo
  }
}
 
const baseDeDados = []
baseDeDados.push(
  novoUsuario('Lucas', 27, 'M'),
  novoUsuario('Maria', 25, 'F'),
  novoUsuario('Luiz', 32, 'M'),
  novoUsuario('Ana', 17, 'F')
);
 
const anoAtual = new Date().getFullYear();
const nasceramEm90 = baseDeDados.filter((usuario) => {
  const { idade } = usuario;
  const anoNascimento = anoAtual - idade;
  return anoNascimento <= 2000 && anoNascimento >= 1990
});
 
console.log(nasceramEm90);
 
/*
[
  { nome: 'Lucas', idade: 27, sexo: 'M' },
  { nome: 'Maria', idade: 25, sexo: 'F' }
]
*/

// Objetos, por natureza, são para uma coisa que tem muitos atributos e não para muitas coisas... Para muitas coisas você precisaria de um array...


// ex2____ Usando objetos sem função fábrica, criar um condicionamento através do uso de if e else para listar, por exemplo, os usuários que nasceram na década de 90.Segue:



/*
var novoUsuario = {
  nome: 'Lucas',
  specs: {
      idade: 27,
      genero: 'M'
  }
}

function listaUsuarios() {
  if (2021 - novoUsuario.specs.idade <= 1999 && 2021 - novoUsuario.specs.idade >= 1990) {
      console.log(novoUsuario.nome)
  } else {
      console.log('Nada encontrado =/')
  }
}

listaUsuarios()

*/