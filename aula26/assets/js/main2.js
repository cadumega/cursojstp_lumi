// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');

  const peso = Number(inputPeso.value);            //Conversões
  const altura = Number(inputAltura.value);

  if (!peso) {                        // peso não sendo um número inválido
    setResultado('Peso inválido', false);
    return;
  }

  if (!altura) {
    setResultado('Altura inválida', false);
    return;
  }

  const imc = getImc(peso, altura);    // criando fç específica
  const nivelImc = getNivelImc(imc);   // outra fç

  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  setResultado(msg, true);
});

// Criar pequenas funções que fazem pequenas coisas, o código real é feito uma função para validar, criar o reusltado é outra função.

function getNivelImc (imc) {                    //Lista de strings
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function getImc (peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaP () {                     //fç que cria um parágrafo
  const p = document.createElement('p');
  return p;
}

function setResultado (msg, isValid) {         //fç que set o resultado, se é valido
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criaP();

  if (isValid) {            //adições de classes, estilização
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }

  p.innerHTML = msg;                     //add de paragrafo no html
  resultado.appendChild(p);
}
