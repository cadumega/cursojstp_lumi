//  new Date (0);  
/* 

function getTimeFromSecond(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12:false,
    timeZone: 'UTC'          //Zerar a hora
  });
  
}
console.log(getTimeFromSecond(10));

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;                    //essa var ta no closure,vizinha a fç que criei de iniciar
let timer;                    // de fora para dentro posso criar var dessa maneira

function iniciaRelogio() {
  timer = setInterval(function() {
    segundos++;                                           //adicionar +1
    relogio.innerHTML = getTimeFromSecond (segundos);   //formatar a hora
  },1000);

}


iniciar.addEventListener('click', function (event){
  relogio.classList.remove('pausado');
  clearInterval(timer);        //garantir para não criar 2 times
  iniciaRelogio();      // alert('Cliquei no iniciar');
});

pausar.addEventListener('click', function (event){
  relogio.classList.add('pausado');
  clearInterval(timer);
});

zerar.addEventListener('click', function (event){
  clearInterval(timer);
  relogio.innerHTML = '00:00:00';
  segundos = 0;
});

 */

//ex1.2________=

function relogio() {
  function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

  const relogio = document.querySelector('.relogio');
  let segundos = 0;
  let timer;

  function iniciaRelogio() {
    timer = setInterval(function() {
      segundos++;
      relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
  }

  document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('zerar')) {
      clearInterval(timer);
      relogio.innerHTML = '00:00:00';
      relogio.classList.remove('pausado');
      segundos = 0;
    }

    if (el.classList.contains('iniciar')) {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      iniciaRelogio();
    }

    if (el.classList.contains('pausar')) {
      clearInterval(timer);
      relogio.classList.add('pausado');
    }
  });
}
relogio();
