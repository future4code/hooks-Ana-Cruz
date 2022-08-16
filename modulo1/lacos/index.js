/* 
EXERCÍCIO 1
A cada soma o valor recebe o seu + o indice i, então ao final do laço vai retornar valor = 10

EXERCÍCIO 2
a) Será impresso do número 19 (maior que 18) até o final do array
b) Basta usar o lista.indexOf(numero) com a informação de qual o valor de cada índice que está salvo na variável numero

EXERCÍCIO 3
*
**
***
****

*/


/* 
// EXRCÍCIO 1
const qtdeBichos = Number(prompt("Quantos bichinhos de estimação você tem?"))
const nomeBichos = []

if (qtdeBichos === 0) { // a)
    console.log("Que pena! Você pode adotar um pet!")
} else if (qtdeBichos > 0) {
    let contagem = 0
    while (contagem < qtdeBichos) { // b)
        nomeBichos[contagem] = prompt(`Digite o nome do seu ${contagem+1} animal`)
        contagem++
    }
}
// c)
console.log(nomeBichos)
 */


// EXERCÍCIO 2
const arrayOriginal =[11, 30, 55, 70, 99, 100]

// a)
function imprimirOriginal(array) {
    let contagem = 0
    while (contagem < array.length) {
        console.log(array[contagem])
        contagem++
    }
}
//imprimirOriginal(arrayOriginal)

// b)
function imprimirDivididoPor10(array) {
    let contagem = 0
    while (contagem < array.length) {
        console.log(array[contagem]/10)
        contagem++
    }
}
//imprimirDivididoPor10(arrayOriginal)

// c)
function imprimirPares(array) {
    const novoArray = []
    let contagem = 0
    while (contagem < array.length) {
        if (array[contagem]%2 === 0) {
        novoArray.push(array[contagem])
        }
        contagem++
    }
    return novoArray
}
//console.log(imprimirPares(arrayOriginal))

// d)
function imprimirStrings(array) {
    const novoArray = []
    let contagem = 0
    while (contagem < array.length) {
        novoArray.push(`O elemento do index ${contagem} é o elemento ${array[contagem]}`)
        contagem++
    }
    return novoArray
}
//console.log(imprimirStrings(arrayOriginal))

// e) (NÃO CONSEGUI REALIZAR ESSA)
function imprimirMaiorMenor(array) {
    let menorNumero = array[0]
    let maiorNumero = array[length-1]
    let arrayMaiorMenor = []

    for(let i = 0; i < array.length; i++) {
        if (menorNumero > array[i]) {
            menorNumero = array[i]
        }
        if (maiorNumero < array[i]) {
            maiorNumero = array[i]
        }
    }  
    
    arrayMaiorMenor[0] = menorNumero
    arrayMaiorMenor[1] = maiorNumero
    console.log(arrayMaiorMenor)
    //return arrayMaiorMenor
}
//console.log(`O maior número é ${imprimirMaiorMenor(arrayOriginal)[0]} e o menor número é ${imprimirMaiorMenor(arrayOriginal)[1]}`)
//imprimirMaiorMenor(arrayOriginal)
//console.log(imprimirMaiorMenor)