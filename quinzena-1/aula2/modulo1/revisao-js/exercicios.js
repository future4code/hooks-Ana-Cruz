// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let novoArray = []
    for (i = array.length; i > 0; i--) {
        novoArray.push(array[i - 1])
    }
    return novoArray
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => { return a - b })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let novoArrayPares = []
    for (let item of array) {
        if (item % 2 === 0) {
            novoArrayPares.push(item)
        }
    }
    return novoArrayPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let novoArrayParesAoQuadrado = []
    for (let item of array) {
        if (item % 2 === 0) {
            novoArrayParesAoQuadrado.push(item * item)
        }
    }
    return novoArrayParesAoQuadrado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let somador = 0
    let maiorNumero = 0
    for(let i = 0; i<array.length ; i++) {
        for(let item of array) {
            if(array[i] >= item){
                somador++
            }
        }
        if(somador === array.length) {
            maiorNumero = array[i]
            i = array.length
        }
        somador = 0
    }
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let objNumeros = {maiorNumero: 0, maiorDivisivelPorMenor: true, diferenca: 0}
    if(num1 > num2) {
        objNumeros.maiorNumero = num1
        objNumeros.diferenca = num1 - num2
        if(num1%num2 === 0) {objNumeros.maiorDivisivelPorMenor = true}
        else {objNumeros.maiorDivisivelPorMenor = false}
    } else {
        objNumeros.maiorNumero = num2
        objNumeros.diferenca = num2 - num1
        if(num2%num1 === 0) {objNumeros.maiorDivisivelPorMenor = true}
        else {objNumeros.maiorDivisivelPorMenor = false}
    }
    console.log(objNumeros)
    return objNumeros
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = []
    let pares = 0
    for(let i=0 ; i<n ; i++){
        numerosPares[i] = pares
        pares += 2
    }
    return numerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA === ladoB && ladoA === ladoC) {
        return "Equilátero"
    } else if(ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
        return "Escaleno"
    } else {
        return "Isósceles"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let somador = 0
    let maiorNumero = 0
    for(let i = 0; i<array.length ; i++) {
        for(let item of array) {
            if(array[i] >= item){
                somador++
            }
        }
        if(somador === array.length) {
            maiorNumero = array[i]
            i = array.length
        }
        somador = 0
    }
    array.splice()
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    return {...pessoa, nome: "ANÔNIMO"}

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    return pessoas.filter( (obj) => {
        return (obj.altura >= 1.5 && obj.idade >14 && obj.idade <60)
    } )
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    return pessoas.filter( (obj) => {
        return !(obj.altura >= 1.5 && obj.idade >14 && obj.idade <60)
    } )
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for(let item of contas) {
        for(let i =0 ; i<item.compras.length ; i++) {
            item.saldoTotal -= item.compras[i]
        }
        item.compras.splice(0,item.compras.length)
    }
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    return consultas.sort( (nome1, nome2) =>  {
        if(nome1.nome > nome2.nome) return 1
        if(nome1.nome < nome2.nome) return -1   
        else return 0
    } )
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    return consultas.sort( (data1, data2) =>  { 
        return data1.dataDaConsulta.getTime() - data2.dataDaConsulta.getTime() 
    } )
}