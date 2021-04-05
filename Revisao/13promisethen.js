let voceComprouoOsProdutos = new Promise (function (resolve,reject) {
  setTimeout(function () {
    // var products = ['Camisa', 'Sapato', 'Calça']
    reject('Rejeitou')  //resolve(procuts)  //Se rejeitar cai dentro do catch
  }, 2000)
})

// console.log(voceComprouoOsProdutos)    // pendente... undefined

// Acessar os produtos, then representa se a promessa foi resolvida repete isso até de fato ser resolvida a promessa.

voceComprouoOsProdutos.then(function(products) {
  console.log(`Tudo certo! A compra dos seguintes produtos: ${products}`)
})
.catch (function (error) {              // pegar o erro
  console.log(error);
})


/* Poderia ter dentro da promessa um if ou else se der errado . Conceito de promessas quando temos uma ação que não sabemos quanto tempo demora.

let voceComprouoOsProdutos = new Promise (function (resolve,reject) {
  if () {
    resolve
  }else {
    reject
  }
})
 */