// opção mais curta, menos linha de código, js tem essas possibilidades encurtadas, como a arrowfunction

// (condição) ? 'valor para verdadeiro' : 'Valor para falso'

const pontuacaoUsuario = 1200;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';   //fallback valor setada como padrão

console.log(nivelUsuario,corPadrao);  //como não escolheu cor, 

/* 

if (pontuacaoUsuario >= 1000) {
  console.log('Usuário VIP');
} else {
  console.log('Usuário normal');
}

 */