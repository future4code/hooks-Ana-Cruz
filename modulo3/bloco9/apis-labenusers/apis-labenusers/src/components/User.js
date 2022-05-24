import React from 'react';
import { CardUserList } from '../styles';



export class User extends React.Component {
    render() {
        return (
            <CardUserList>
                <div onClick={this.props.onClickShowUser} >
                    {this.props.user.name}
                </div>
            </CardUserList>
        )
    }
}