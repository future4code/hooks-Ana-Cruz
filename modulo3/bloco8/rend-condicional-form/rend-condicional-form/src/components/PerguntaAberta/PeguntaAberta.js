import React from 'react'

export class PerguntaAberta extends React.Component {
    render() {
        return (
            <>
                <p>{this.props.pergunta}</p>
                <input placeholder={this.props.info} />
            </>
        )
    }
}