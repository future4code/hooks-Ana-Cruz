/* EXERCÍCIO 1 */
//a) pelo comando process.argv[indice]

// //b)
// const nome = process.argv[2]
// const idade = Number(process.argv[3])

// console.log(`Olá, ${nome}! Você tem ${idade} anos.`)
// //c)
// console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}`)


/* EXERCÍCIO 2 */
// switch (process.argv[3]) {
//     case "add":
//         console.log(`${Number(process.argv[4]) + Number(process.argv[5])}`)
//         break;
//     case "sub":
//         console.log(`${Number(process.argv[4]) - Number(process.argv[5])}`)
//         break;
//     case "mult":
//         console.log(`${Number(process.argv[4]) * Number(process.argv[5])}`)
//         break;
//     case "div":
//         console.log(`${Number(process.argv[4]) / Number(process.argv[5])}`)
//         break;

//     default:
//         console.log("Escolha entre as opções add/sub/mult/div e passe 2 valores.\nExemplo: sub 3 2 (Estará pedindo para realizar 3-2)")
//         break;
// }


/* EXERCÍCIO 3 */
// import {lista} from './listaTarefas.js'

// const addTarefa = () => {
//     let tarefa = process.argv[2]
//     for(let i=3; i<process.argv.length; i++){
//         tarefa += ' ' + process.argv[i]
//     }
//     return tarefa
// }

// lista.push(addTarefa())
// console.table(lista)

