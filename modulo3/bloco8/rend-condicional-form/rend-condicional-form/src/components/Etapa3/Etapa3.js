import React from 'react'
import { PerguntaAberta } from '../PerguntaAberta/PeguntaAberta'
import { PerguntaOpcoes } from '../PerguntaOpcoes/PerguntaOpcoes'

export class Etapa3 extends React.Component {
    state = {
        complementares: [
        'Curso técnico', 
        'Curso de inglês', 
        'Não fiz curso complementar'
    ]
    }

    render() {
        return (
            <>
                <h2>ETAPA 3: Informações Gerais de Ensino</h2>
                <PerguntaAberta 
                pergunta='Por que você não terminou um curso de graduação?' 
                info='Explique o porquê' />
                <PerguntaOpcoes 
                pergunta='Você fez algum curso complementar?' 
                info={this.state.complementares} />
            </>
        )
    }
}