/* 
Exercicio 1
a. undefined
b. null
c. 11
d. 3
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9

Exercicio 2
SUBI NUM ÔNIBUS EM MIRROCOS 27
*/

 
//EXERCICIO 1
let nomeUsuario = prompt("Digite seu nome: ");
let emailUsuario = prompt("Digite seu e-mail: ");

console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem vindo(a), ${nomeUsuario}`);
 


//EXERCICIO 2
let comidaPreferidas = ["creme de frango", "vatapá", "coxinha", "brigadeiro", "sorvete"];

console.log(comidaPreferidas); // a)
console.log(`Essas são as minhas comidas preferidas:\n${comidaPreferidas[0]} \n${comidaPreferidas[1]} \n${comidaPreferidas[2]} \n${comidaPreferidas[3]} \n${comidaPreferidas[4]}`); //b)

let novaComidaPreferida = prompt("Digite uma comida preferida: ");
//let novaComidaPreferida = "arroz"
let comidaRemovida = comidaPreferidas.splice(2,4); // retirei a sequência que vai continuar depois de add a nova comida
comidaPreferidas.pop(); //retiro a 2a comida
comidaPreferidas.push(novaComidaPreferida); //add a comida preferida na 2a posição
comidaPreferidas.push(comidaRemovida[0], comidaRemovida[1], comidaRemovida[2]); //depois adiciono o restante
//console.log("comida removida:", comidaRemovida, "\n comidas preferidas: ", comidaPreferidas, "\n nova comida ", novaComidaPreferida); 
console.log(comidaPreferidas); // c)
 


//EXERCICIO 3
let listaDeTarefas = []; // a)

// b)
listaDeTarefas.push(prompt("Qual a sua primeira tarefa?"));
listaDeTarefas.push(prompt("Qual a sua segunda tarefa?"));
listaDeTarefas.push(prompt("Qual a sua terceira tarefa?"));

console.log(listaDeTarefas); // c)

let indiceTarefaRealizada = Number(prompt("Qual das 3 tarefas já realizou?"))-1; //d)

listaDeTarefas.splice(indiceTarefaRealizada, 1); // e)

console.log(listaDeTarefas); // f)