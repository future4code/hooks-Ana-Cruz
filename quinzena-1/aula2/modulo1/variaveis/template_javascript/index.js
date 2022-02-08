/*
Exercicio 1
10
10 5 

Exercicio 2
Vai dar erro porque a variável c não foi declarada

Exercicio 3
horaPorDia
ganhoPorDia
*/


// Exercicio 1
let nome; // a)
let idade; // b)

console.log(typeof nome, typeof idade); // c)
// d) foi impresso undefined 2 vzs porque a variável foi criada, mas não foi direcionada nenhum valor pra ela.

nome = prompt("Digite seu nome"); // e)
idade = prompt("Digite sua idade"); // e)

console.log(typeof nome, typeof idade); // f) No caso as duas são strings, mas isso é porque o retorno que o comando prompt dá é uma string

console.log("Olá " + nome + ", você tem " + idade + " anos."); // g)



// Exrcicio 2
let pergunta1 = "Você está bem?";
let pergunta2 = "Você acordou cedo hoje?";
let pergunta3 = "Você tomou café hoje?";

// a) Criando as respostas
let resposta1 = prompt(pergunta1);
let resposta2 = prompt(pergunta2);
let resposta3 = prompt(pergunta3);

// b)
console.log(pergunta1, "-", resposta1);
console.log(pergunta2, "-", resposta2);
console.log(pergunta3, "-", resposta3);


// Exercicio 3
let a = 10;
let b = 25;

let c = a + b;

a = c - a;
b = c - b;

console.log("O novo valor de a é", a);
console.log("O novo valor de b é", b);