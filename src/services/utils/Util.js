
function adicionaZero(numero){
  if (numero <= 9) 
      return "0" + numero;
  else
      return numero; 
}

export function dataFormat(data) {

  let dataAtual = new Date(data);
  
  return (adicionaZero((dataAtual.getDate() + 1).toString()) + "/" + (adicionaZero(dataAtual.getMonth()+1).toString()) + "/" + dataAtual.getFullYear());
}

export function createDataProjeto(nome, dataInicio, dataFinal) {
  return { nome, dataInicio, dataFinal };
}

export function createDataAtividade(nome, dataInicio, dataFinal, projeto) {
  var idProjeto = parseInt(projeto);

  return { nome, dataInicio, dataFinal, idProjeto};
}