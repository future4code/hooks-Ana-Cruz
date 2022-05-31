import React from 'react';
import { ContainerInput } from '../styles';



export class UserInput extends React.Component {
    render() {
        return (
            <ContainerInput>
                <input placeholder="Name"
                    value={this.props.bodyInput.name}
                    onChange={this.props.onChangeName} />
                <input placeholder="E-mail"
                    value={this.props.bodyInput.email}
                    onChange={this.props.onChangeEmail} />
                <button onClick={this.props.onClickRegister} >{this.props.nameButton}</button>
            </ContainerInput>
        )
    }
}