/* 
EXRCÍCIO 1
a) Ele testa se o número dividido por 2 tem resto 0, ou seja, testa se o número é par, se sim ele informa que passou no teste, caso contrário ele informa que não passou
b) Para número pares
c) Números ímpares

EXERCÍCIO 2
a) Serve pra informa o preço da fruta que o usuário escolher
b) "O preço da fruta Maçã é R$ 2.25"
c) "O preço da fruta Pêra é R$ 5"
Pois nesse caso ele confirma que é pera, preco recebe 5.5 mas como não tem o break ele continua no default e preco recebe 5 por fim.

EXERCÍCIO 3
a) Está pedindo ao usuário para digitar um número, transforma em inteiro e salva na variável número.
b) Se o número for 10 será impresso:
"Esse número passou no teste"
Porém dá erro ao tentar imprimir a variável mensagem que foi declarada dentro do escopo de if
E se o número for -10
Ele só passa direto para o erro
c) Sim, pois a variável mensagem está declarada dentro do escopo local da condição if e sendo acessada de fora, o que poderia ocorrer seria o contrário, a variável ser declarada no escopo global e ser acessada dentro da condição if
*/

/* 
// EXERCÍCIO 1
const recebeIdade = prompt("Digite sua idade:") // a)
const idadeUsuario = Number(recebeIdade) // b)

// c)
if (idadeUsuario>=18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}
 */

/* 
// EXRCÍCIO 2
const turnoAluno = prompt("Digite qual a letra do turno que estuda: M (Matutino), V (Vespertino) e N (Noturno)")

if (turnoAluno.toUpperCase() === "M") {
    console.log("Bom dia!")
} else if (turnoAluno.toUpperCase() === "V") {
    console.log("Boa tarde!")
} else if (turnoAluno.toUpperCase() === "N"){
    console.log("Boa noite!")
} else {
    console.log("Você não escolheu nenhum turno!!")
}
 */

/* 
// EXERCÍCIO 3
switch (turnoAluno.toUpperCase()){
    case "M":
        console.log("Bom dia!")
        break;
    case "V":
        console.log("Boa tarde!")
        break;
    case "N":
        console.log("Boa noite!")
        break;
    default:
        console.log("Você não escolheu nenhum turno!!")
        break;
}
 */

/* 
// EXERCÍCIO 4
const generoFilme = prompt("Qual o gênero do filme?")
const valorIngreco = Number(prompt("Qual o valor do ingresso?"))

if ( generoFilme.toUpperCase() === "FANTASIA" && valorIngreco < 15 ) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme!")
}
 */

/* 
// DESAFIO 1
const generoFilme2 = prompt("Qual o gênero do filme?")
const valorIngreco2 = Number(prompt("Qual o valor do ingresso?"))

if ( generoFilme2.toUpperCase() === "FANTASIA" && valorIngreco2 < 15 ) {
    lanchinho = prompt("Qual lanche irá comprar?")
    console.log(`Bom filme! Aproveite o seu ${lanchinho}`)
} else {
    console.log("Escolha outro filme!")
}
 */


// DESAFIO 2
const nomeCompleto = prompt("Digite seu nome completo")
const tipoJogo = prompt("Qual o tipo de jogo? IN (Internacional) ou DO (Doméstico)?")
const etapaJogo = prompt("Qual a etapa do jogo? SF (Semi-final), DT (Decisão de terceiro lugar) ou FI (Final)?")
const categoriaJogo = Number(prompt("Qual categoria? 1, 2, 3 ou 4?"))
const qtdeIngresso = prompt("Quantos ingressos deseja comprar?")

const valoresSf = [1320, 880, 550, 220]
const valoresDt = [660, 440, 330, 170]
const valoresFi = [1980, 1320, 880, 330]

const ingressoEscolhido = {
    nome: nomeCompleto,
    tipo: "nada",
    etapa: "nenhuma",
    categoria: 0,
    valorIngresso: 0,
    qtdeIngresso: qtdeIngresso,
    valorFinal: 0
}


if (tipoJogo.toUpperCase() === "DO") {
    ingressoEscolhido.tipo = "Nacional"

    switch (etapaJogo.toUpperCase()) {
    case "SF":
        ingressoEscolhido.etapa = "Semifinais"
        ingressoEscolhido.categoria = categoriaJogo
        ingressoEscolhido.valorIngresso = valoresSf[categoriaJogo-1]
        ingressoEscolhido.valorFinal = ingressoEscolhido.valorIngresso * qtdeIngresso
        break
    case "DT":
        ingressoEscolhido.etapa = "Decisão do 3o lugar"
        ingressoEscolhido.categoria = categoriaJogo
        ingressoEscolhido.valorIngresso = valoresDt[categoriaJogo-1]
        ingressoEscolhido.valorFinal = ingressoEscolhido.valorIngresso * qtdeIngresso
        break
    case "FI":
        ingressoEscolhido.etapa = "Final"
        ingressoEscolhido.categoria = categoriaJogo
        ingressoEscolhido.valorIngresso = valoresFi[categoriaJogo-1]
        ingressoEscolhido.valorFinal = ingressoEscolhido.valorIngresso * qtdeIngresso
        break
    default:
        console.log("Você não escolheu nenhuma das opções de Etapa!! Cadastro INCOMPLETO!")
        break
    }

} else if (tipoJogo.toUpperCase() === "IN") {
    ingressoEscolhido.tipo = "Internacional"

    switch (etapaJogo.toUpperCase()) {
    case "SF":
        ingressoEscolhido.etapa = "Semifinais"
        ingressoEscolhido.categoria = categoriaJogo
        ingressoEscolhido.valorIngresso = valoresSf[categoriaJogo-1] /4.10
        ingressoEscolhido.valorFinal = ingressoEscolhido.valorIngresso * qtdeIngresso
        break
    case "DT":
        ingressoEscolhido.etapa = "Decisão do 3o lugar"
        ingressoEscolhido.categoria = categoriaJogo
        ingressoEscolhido.valorIngresso = valoresDt[categoriaJogo-1] /4.10
        ingressoEscolhido.valorFinal = ingressoEscolhido.valorIngresso * qtdeIngresso
        break
    case "FI":
        ingressoEscolhido.etapa = "Final"
        ingressoEscolhido.categoria = categoriaJogo
        ingressoEscolhido.valorIngresso = valoresFi[categoriaJogo-1] /4.10
        ingressoEscolhido.valorFinal = ingressoEscolhido.valorIngresso * qtdeIngresso
        break
    default:
        console.log("Você não escolheu nenhuma das opções de Etapa!! Cadastro INCOMPLETO!")
        break
    }
    

} else {
    console.log("Você não escolheu nenhuma das opções de tipo!! Cadastro INCOMPLETO!")
}

if (tipoJogo.toUpperCase() === "DO"){
console.log(`\n---Dados da Compra---\n
Nome do cliente: ${nomeCompleto}\n
Tipo de jogo: ${ingressoEscolhido.tipo}\n
Etapa do jogo: ${ingressoEscolhido.etapa}\n
Categoria: ${ingressoEscolhido.categoria}\n
Quantidade de ingressos: ${qtdeIngresso} ingressos\n
---Valores---\n
Valor do ingresso: R$ ${ingressoEscolhido.valorIngresso},00\n
Valor total: R$ ${ingressoEscolhido.valorFinal},00`)

} else if (tipoJogo.toUpperCase() === "IN") {
console.log(`\n---Dados da Compra---\n
Nome do cliente: ${nomeCompleto}\n
Tipo de jogo: ${ingressoEscolhido.tipo}\n
Etapa do jogo: ${ingressoEscolhido.etapa}\n
Categoria: ${ingressoEscolhido.categoria}\n
Quantidade de ingressos: ${qtdeIngresso} ingressos\n
---Valores---\n
Valor do ingresso: U$ ${ingressoEscolhido.valorIngresso},00\n
Valor total: U$ ${ingressoEscolhido.valorFinal},00`)
}