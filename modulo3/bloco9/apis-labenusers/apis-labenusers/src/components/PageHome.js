import React from 'react';
import { ContainerHome } from '../styles';
import { UserInput } from './UserInput';


export class PageHome extends React.Component {
    render() {
        return (
            <ContainerHome>
                <img src={this.props.logo} alt="imagem da logo" />
                <h1>DatingDay's</h1>
                <p>Register now</p>
                <UserInput nameButton='Register' bodyInput={this.props.bodyInput}
                onChangeName={this.props.onChangeName}
                onChangeEmail={this.props.onChangeEmail}
                onClickRegister={this.props.onClickRegister} />
                <button onClick={this.props.onClickSeeList} >See List</button>
            </ContainerHome>
        )
    }
}