import React from 'react';
import { CardUser } from '../styles';
import { UserInput } from './UserInput';



export class UserDetail extends React.Component {
    render() {
        return (
            <CardUser>
                <div>
                    {`Nome: ${this.props.user.name}`} <br /><br />
                    {`E-mail:`}<br />{`${this.props.user.email}`}
                </div>
                <button onClick={this.props.onClickDeleteUser} >Delete</button>
                {!this.props.showInput ? <button onClick={this.props.onClickEditUser} >Edit</button> :
                    <UserInput nameButton='Salvar' bodyInput={this.props.bodyInput}
                        onChangeName={this.props.onChangeName}
                        onChangeEmail={this.props.onChangeEmail}
                        onClickRegister={this.props.onClickRegister} />}

            </CardUser>
        )
    }
}