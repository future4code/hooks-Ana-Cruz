import React from 'react'

export class PerguntaOpcoes extends React.Component {
    state ={
        escolha: ''
    }

    onChangeSelecao = (event) => {
        this.setState({ escolha: event.target.value })
    }

    render() {
        let arrayComponentes = this.props.info.map( (item) => {
            return <option key={item} value={item} >{item}</option>
        } )

        console.log(`SELECIONADO: ${this.state.escolha}`)
        
        return (
            <>
                <p>{this.props.pergunta}</p>
                <select name='Escolaridade' value={this.state.escolha}
                onChange={(event) => this.onChangeSelecao(event)} >
                    {arrayComponentes}
                </select>
            </>
        )
    }
}