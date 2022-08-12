enum Genero {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filme = {
    nome: string,
    anoLancamento: number,
    genero: Genero
}

type Pontuacao = {
    pontuacao: number
}

type FilmeComPontuacao = Filme & Pontuacao

const retornaFilme = (nome: string, anoLancamento: number, genero: Genero, pontuacao?: number | undefined): (Filme | FilmeComPontuacao) => {
    if(pontuacao){
        return {nome, anoLancamento, genero, pontuacao}
    } else{
        return {nome, anoLancamento, genero}
    }
}

console.log(retornaFilme("A volta dos que não foram", 2020, Genero.COMEDIA))
console.log(retornaFilme("A Múmia", 2009, Genero.ACAO, 90))
