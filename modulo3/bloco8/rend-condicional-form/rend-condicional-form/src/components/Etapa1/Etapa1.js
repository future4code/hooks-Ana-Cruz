import React from 'react'
import { PerguntaAberta } from '../PerguntaAberta/PeguntaAberta'
import { PerguntaOpcoes } from '../PerguntaOpcoes/PerguntaOpcoes'

export class Etapa1 extends React.Component {
    state ={
        escolaridades: [
        'Ensino Médio Incompleto', 
        'Ensino Médio Completo',
        'Ensino Superior Incompleto',
        'Ensino Superior Completo'
        ],
        escolha: ''
    }

    render() {
    
        console.log(`ETAPA1: ${this.state.escolha}`)
        return (
            <>
                <h2>ETAPA 1: Dados Gerais</h2>
                <PerguntaAberta 
                pergunta='1. Qual seu nome?' info='Nome'/>
                <PerguntaAberta 
                pergunta='2. Qual sua idade?' info='Idade'/>
                <PerguntaAberta 
                pergunta='3. Qual seu e-mail?' info='E-mail'/>
                <PerguntaOpcoes 
                pergunta='Qual seu grau de escolaridade:' 
                info={this.state.escolaridades} />
            </>
        )
    }
}