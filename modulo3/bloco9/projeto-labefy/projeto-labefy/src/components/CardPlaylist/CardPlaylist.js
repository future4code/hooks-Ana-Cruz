import React from 'react';
import deleteImg from '../../img/delete.png';
import editImage from '../../img/edit.png';
import { Container } from './styles';

export class CardPlaylist extends React.Component {
    render() {
        return (
            <Container>
                <div onClick={this.props.onClickShowPlaylist}>
                    {this.props.name}
                </div>
                <img src={deleteImg} onClick={this.props.onClickdeletePlaylist} />
            </Container>
        )
    }
}