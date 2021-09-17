// Aqui coloquei uma condicao direta
// Then fica olhando para a promessa, resolvendo a promise o then ativa.
// Não é criado com a palavra function e sim com arrow
// Espera um segundo passar e resolveu para ir ao .then
// Qd javascript verifica o . ele tenta acessar logo atrás dele o objeto que tiver, independente de espaço.
const promise = new Promise((resolve, reject) => {
    let condicao = true;
    if (condicao) {
        setTimeout(() => {
            resolve({ nome: 'Andre', idade: 28 })
        }, 1000)
    } else {
        reject(Error('Um erro ocorreu na promise'))
    }
});

const retorno = promise
.then(resolucao => {
    console.log(resolucao);
    resolucao.profissao = 'Programador';
    return resolucao
})
.then (resolucao => {
    console.log(resolucao)
}, rejeitada => {                //posso escrever dessa forma a rejeicao como 2° arg
    console.log(rejeitada);
}).finally(()=> {
    console.log('Acabou');
})

console.log(retorno);


// finally sempre é executado independente de erro ou acerto
