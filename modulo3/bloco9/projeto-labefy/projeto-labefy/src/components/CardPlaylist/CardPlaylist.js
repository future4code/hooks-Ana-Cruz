import React from 'react';
import deleteImg from '../../img/delete.png';
import { Container } from './styles';

export class CardPlaylist extends React.Component {
    render() {
        return (
            <Container>
                <div onClick={this.props.onClickShowPlaylist}>
                    {this.props.name}
                </div>
                <img src={deleteImg} alt='icone de deletar' onClick={this.props.onClickdeletePlaylist} />
            </Container>
        )
    }
}