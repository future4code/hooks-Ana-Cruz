import React from 'react';
import { CardUser } from '../styles';



export class User extends React.Component {
    render() {
        return (
            <CardUser>
                <div>
                    <p>{this.props.name}</p>
                </div>
                <button onClick={this.propsonClickDeleteUser} >X</button>
                {/* <button onClick={this.props.onClickreturnPageList} >Return</button> */}
            </CardUser>
        )
    }
}