/* 
EXERECICIO 1
a)10
50
b)No console não apareceria nada, apesar de que o programa rodaria a função normalmente.

EXERCICIO 2
a)Essa função verifica se no texto inserido pelo usuário consta a palavra cenoura e retorna true se sim e false se não
b)i. true
ii. true
iii. true
*/

//EXERCICIO 1
// a)
function imprimirMensagem(){
    console.log("Eu sou Ana Lívia, tenho 30 anos, moro em Fortaleza e sou estudante.")
}
// b)
function imprimirMensagemAlterada(nome, idade, cidade, profissao){
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`
}


//EXERCICIO 2
// a)
function soma(num1, num2){
    return num1+num2
}
console.log(soma(2,3))
// b)
function numeroMaiorIgualQue(num1, num2){
    return num1>=num2
}
//console.log(numeroMaiorIgualQue(3,3))
// c)
function numeroPar(numero){
    const resto = numero%2
    return resto === 0
}
//console.log(numeroPar(300))
// d)
let textoUsuario = prompt("Digite um texto")
function imprimirTexto(mensagem){
    console.log(mensagem.length, mensagem.toUpperCase())
}
imprimirTexto(textoUsuario)


//EXRCICIO 3
function somar(num1, num2){
    return num1+num2
}
function subtrair(num1, num2){
    return num1-num2
}
function multiplicar(num1, num2){
    return num1*num2
}
function dividir(dividendo, divisor){
    return dividendo/divisor
}

let numero1 = Number(prompt("Digite o primeiro número:"))
let numero2 = Number(prompt("Digite o segundo número:"))

console.log(`Soma: ${somar(numero1, numero2)} \nDiferença: ${subtrair(numero1, numero2)} \nMultipliação: ${multiplicar(numero1, numero2)} \nDivisão: ${dividir(numero1, numero2)}`)