function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let qtdeVezes = 0;
  for(let i=0; i<arrayDeNumeros.length; i++){
    if(arrayDeNumeros[i] === numeroEscolhido){
      qtdeVezes++;
    }
  }
  if(qtdeVezes>0)
    return `O número ${numeroEscolhido} aparece ${qtdeVezes}x`
  else
    return `Número não encontrado`
}