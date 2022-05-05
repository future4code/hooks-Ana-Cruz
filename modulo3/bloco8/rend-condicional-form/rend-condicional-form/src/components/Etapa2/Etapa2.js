import React from 'react'
import { PerguntaAberta } from '../PerguntaAberta/PeguntaAberta'

export class Etapa2 extends React.Component {
    render() {
        return (
            <>
                <h2>ETAPA 2: Informações do Ensino Superior</h2>
                <PerguntaAberta 
                pergunta='Qual o curso?' 
                info='Curso Superior' />
                <PerguntaAberta 
                pergunta='Qual a unidade de ensino?' 
                info='Faculdade/Universidade' />
            </>
        )
    }
}