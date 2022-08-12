enum Siglas {
    AC = "AC",
    DC = "DC"
}

const idadeHistorica = (ano: number, sigla: Siglas | undefined): string => {
    if(sigla === Siglas.AC || sigla === Siglas.DC){
        return !sigla ?  `${ano} ${Siglas.DC}` : `${ano} ${sigla}`
    } else {
        return `Você precisa colocar uma sigla que seja AC ou DC`
    }
}

// console.log(idadeHistorica(1999, Siglas.AC))