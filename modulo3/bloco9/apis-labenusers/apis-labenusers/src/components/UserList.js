import React from 'react';
import { CardUser } from '../styles';



export class UserList extends React.Component {
    render() {
        return (
            <CardUser>
                <div onClick={this.props.onClickShowUser} >
                    <p>{this.props.user.name}</p>
                </div>
                <button onClick={this.props.onClickDeleteUser} >X</button>
            </CardUser>
        )
    }
}