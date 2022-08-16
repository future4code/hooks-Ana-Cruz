/* 
EXERCICIO 1
a. false
b. false
c. true
d. boolean

EXERCICIO 2
O problema que ocorre é que o retorno do comando prompt retorna uma string. Então na hora da soma, apenas as duas respostas serão concatenadas e não somadas como um número.

EXERCICIO 3
Nesse caso o ideal é colocar a função Number para receber o retorno de prompt e transformar a string em número.
*/


//EXERCÍCIO 1
let suaIdade = Number(prompt("Qual a sua idade?")); // a)
let seuAmigoIdade = Number(prompt("Qual a idade do seu amigo?")); //b)

console.log("Sua idade é maior que a do seu amigo?", suaIdade>seuAmigoIdade); //c)

console.log("A diferença de idade é de", suaIdade-seuAmigoIdade, "ano(s)."); // d)



//EXERCICIO 2
let numeroPar = Number(prompt("Por favor digite um número PAR")); // a)

console.log(numeroPar%2); // b)

// c) No caso todos os restos da divisão de número par por 2 dá 0

// d) Todos os restos da divisão de númeero impar por 2 dá 1

 
//EXERCICIO 3
let suaIdade = Number(prompt("Quantos anos você tem?")); 
console.log("Você tem", suaIdade*12, "meses de vida"); // a)
console.log("Você tem", suaIdade*365, "dias de vida"); // b)
console.log("Você tem", suaIdade*24*365, "horas de vida"); // c)



//EXERCICIO 4
let primeiroNumero = Number(prompt("Digite o primeiro número"));
let segundoNumero = Number(prompt("Digite o segundo número"));

console.log("O primeiro número é maior que o segundo?", primeiroNumero>segundoNumero);
console.log("O primeiro número é igual que o segundo?", primeiroNumero===segundoNumero);
console.log("O primeiro número é divisível pelo segundo?", (segundoNumero%segundoNumero)===0); //um número é divisível quando o resto da sua divisão é zero
console.log("O segundo número é divisível pelo primeiro?", (segundoNumero%primeiroNumero)===0);
 

