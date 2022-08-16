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


const mensagemInicio = confirm("Boas vindas ao jogo de Blackjack! \nDeseja iniciar uma nova rodada?")

const usuario = []
const computador = []

usuario.push(comprarCarta())
usuario.push(comprarCarta())
computador.push(comprarCarta())
computador.push(comprarCarta())
let pontosUsuario = usuario[0].valor + usuario[1].valor
let pontosComputador = computador[0].valor + computador[1].valor


if(mensagemInicio){
   //let qtdeCartas = usuario.length-1
   let comprarMaisCarta = true
   let mensagemCartas = "" + usuario[0].texto + " " + usuario[1].texto
   let qtdeCartas = usuario.length - 1

   while( comprarMaisCarta && !(pontosUsuario>21) ){
      
      comprarMaisCarta = confirm(`Suas cartas são: ${mensagemCartas}. \nDeseja comprar mais uma carta?`)
      if(comprarMaisCarta){
         qtdeCartas = usuario.length - 1
         usuario.push(comprarCarta())
         pontosUsuario += usuario[qtdeCartas].valor
         mensagemCartas += " " + usuario[qtdeCartas].texto
      }
   }

   if(pontosUsuario>21)
      alert(`Suas cartas são: ${mensagemCartas}. Sua pontuação é ${pontosUsuario}. \nO computador ganhou!`)

   console.log(usuario)



} else
   console.log("O jogo acabou!")