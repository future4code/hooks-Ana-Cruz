//a)
let minhaString: string = "Ana"
//minhaString = 30
// ele dá um erro que não pode inserir um numero a uma variável pre-definida que é string

//b)
let meuNumero: number | string = 30
meuNumero = "Ana"
/* para que aceite outro valor alem de numero adiciona um Union Types com os 
valores que deseja que ela possa receber */

//c)
type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: Cores
}

enum Cores {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}

const objectPessoa1: Pessoa = {
    nome: "Ana Lívia",
    idade: 30,
    corFavorita: Cores.AZUL
}

const objectPessoa2: Pessoa = {
    nome: "Ana Lívia",
    idade: 30,
    corFavorita: Cores.AZUL
}

const objectPessoa3: Pessoa = {
    nome: "Ana Lívia",
    idade: 30,
    corFavorita: Cores.AZUL
}