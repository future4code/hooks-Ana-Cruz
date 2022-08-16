const validaProcessoLabenu = (idade: number, ensinoMedio: boolean, 
    horasSemanais: number, escolhaCurso: string): boolean => {
    if(idade>18 && ensinoMedio && escolhaCurso.toLowerCase() === "noturno"){
        return horasSemanais >= 20 ? true : false
    } else if(idade>18 && ensinoMedio && escolhaCurso.toLowerCase() === "integral"){
        return horasSemanais >= 40 ? true : false
    } else{
        return false
    }
}

console.log(validaProcessoLabenu(20, true, 45, 'integral'))


