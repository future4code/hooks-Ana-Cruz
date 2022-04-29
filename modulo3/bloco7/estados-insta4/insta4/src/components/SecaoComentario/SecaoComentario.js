import React from 'react'
import { CommentContainer, InputComentario } from '../SecaoComentario/styled'


export class SecaoComentario extends React.Component {
	state = {
		valorComentario: ""
	}

	onChangeComentario = (event) => {
		this.setState({
			valorComentario : event.target.value
		})
	}

	render() {
		return <CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={this.state.valorComentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</CommentContainer>
	}
}
