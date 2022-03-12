/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Boas vindas ao jogo de Blackjack!")

if(confirm("Deseja iniciar uma nova rodada?")){
   const cartaUsuario = [comprarCarta(), comprarCarta()]
   const cartaComputador = [comprarCarta(), comprarCarta()]
   const pontuacaoUsuario = cartaUsuario[0].valor + cartaUsuario[1].valor
   const pontuacaoComputador = cartaComputador[0].valor + cartaComputador[1].valor

   console.log(`Usuário - cartas:  ${cartaUsuario[0].texto} ${cartaUsuario[1].texto} - pontuação ${pontuacaoUsuario}
   \nComputador - cartas:  ${cartaComputador[0].texto} ${cartaComputador[1].texto} - pontuação ${pontuacaoComputador}`)

   if(pontuacaoUsuario > pontuacaoComputador  ||  pontuacaoComputador > 21)
      console.log("O Usuário ganhou!")
   else if(pontuacaoUsuario < pontuacaoComputador  ||  pontuacaoUsuario > 21)
      console.log("O Computador ganhou")
   else 
      console.log("Empate!")

} else {
   console.log("O jogo acabou!")
}
