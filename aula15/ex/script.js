const numero = Number(prompt('Digite um número:'));
//numero = Number (numero);  //#obs1# conversão de string para number. Converte vazio para 0.
const numeroTitulo = document.getElementById('numero-titulo'); // quero obter um elemento por ID, entre parenteses método; olha doc seleciona um elemento por id, depois vc salva nessa variavel numeroTItulo.
const texto = document.getElementById('texto');     //selecionando a id texto que criei no html, 1 elemento id

//Iremos alterar o html interno desses elementos Id , do span que criei
numeroTitulo.innerHTML = numero;
//texto.innerHTML = `<p>Seu número +2 é ${numero + 2}.</p>`;   //retorna string preciso converter #obs1#

texto.innerHTML = ' ';  //Limpar o texto que coloquei no HTML, deixar zerado para add os innerHTML
texto.innerHTML += `<p>Raiz quadrada: ${numero **0.5}.</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>.` ;

// por estar usando o operador = , acaba q zera e salva last valor, só que quero adicionar os texto, logo usar +=, por isso só aparecia o ultimo texto.innerHTML