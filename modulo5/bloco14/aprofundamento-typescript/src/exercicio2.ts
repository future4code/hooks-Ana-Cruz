const obterEstatisticas = (numeros: number[]): {maior: number, menor: number, media: number} => {

    const numerosOrdenados: number[] = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: {maior: number, menor: number, media: number} = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

//a) entrada: number e saída um objeto com propriedades number 

//b) São todas no formato number, porém objetos e arrays

//c)
type Amostra = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => {maior: number, menor: number, media: number}
}

//Type Amostra é um objeto que possui um array de numeros e uma função que recebe esse array
//de numeros como parametro e retorna um objeto com as informações
