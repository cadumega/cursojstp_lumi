try {                    // Executa quando não há erros
  // console.log(a);
  console.log('Abri um arquivo');
  console.log('Manipulei o arquivo e gerou erro');  // POderia dar erro aqui, e iria executar logo o catch e não a proxima linha do log. Então ou executa o bloco do try todo ou uma parte.
  console.log('Fechei o arquivo');
  
  try {
    console.log(b);
  } catch(e) {
    console.log('Deu erro');
  } finally {
    console.log('Também sou finally.');
  }

} catch (e) {              // Executa quando há erros
  
} finally {         // Sempre , dando erro ou não. Fechar sempre pelo finally, será tratado sempre.
  console.log('FINALLY: Eu sempre sou executado');
 
}

console.log('################')


function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError ('Esperando instância de Date.')
  }

  if (!data) {
    data = new Date ();
  }

  return data.toLocaleTimeString('pt-BR', {
    
    hour: '2-digit',   // ter 2 dígitos
    minute: '2-digit',
    second:'2-digit',
    hour12:false      // para ser 24h
  });
}

try {
  const data = new Date ('01-01-1970 12:58:12')
  const hora = retornaHora();
  console.log(hora);
} catch (e) {
  // Tratar erro
  // Console.log(e);
}finally {
  console.log('Tenha um bom dia');
}
