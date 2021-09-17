// Buscamos recursos onde não temos noção exata do retorno. Para trabalharmos com esses dados. Solução antiga era fç de call back, as promises vieram para resolver isso. 


// Requisição que fazemos a resposta do conteúdo da página chega em momentos diferentes, não teremos certeza do tempo que demora para baixar o conteúdo 

// Criar uma função normal 1°

function rand(min, max) {
    min *=1000;
    max *=1000;
    return Math.floor(Math.random() * (max - min) +min);
}


//2 param q serão chamados, Convenção do param
// Como se fosse um if else. Resolve ok como if, o reject como else deu ruim , trata o valor.

function esperaAi (msg,tempo) {
    return new Promise ((resolve, reject) => {   
        if(typeof msg !== 'string') reject('BAD VALUE')

        setTimeout(() => {
        resolve(msg)          // Promessa vai ficar pendente até que caia no resolve
        },tempo);
    });
}

esperaAi('Conexão com o BD...', rand(1,3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados da Base...' , rand (1,3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(2222, rand(1,3));
    })
    .then(resposta => {
        console.log(resposta);
    }).then(() => {
        console.log('Exibe os dados na tela.');
    })
    .catch(e => {
        console.log('ERRO:', e);
    }); 

    console.log('Isso aqui será exibido antes de qualquer Promise.')

    // Promises são em paralelo, executa o código e joga as promises para executar depois, código assincrono.

    // Irá chegar para você o erro que ocorreu.

    // Mae pede ao filho para comprar leite no mercado.É  como se fosse uma promise.

    // Promise.all   .race    .resolve    .reject