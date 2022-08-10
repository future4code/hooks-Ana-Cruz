import {lista} from '../listaTarefas.js'

const addTarefa = () => {
    let tarefa = process.argv[2]
    for(let i=3; i<process.argv.length; i++){
        tarefa += ' ' + process.argv[i]
    }
    return tarefa
}

lista.push(addTarefa())
console.table(lista)