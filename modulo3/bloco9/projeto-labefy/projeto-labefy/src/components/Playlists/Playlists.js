import React from 'react';
import { InputPlay } from '../InputPlay/InputPlay';
import { Container, List } from './styles';

export class Playlists extends React.Component {

    render() {
        return (
            <Container>
                <InputPlay valueInput={this.props.valueInput}
                    onChangePlaylistName={this.props.onChangePlaylistName}
                    onClickCreatePlaylist={this.props.onClickCreatePlaylist} />
                    <h2>Playlists</h2>
                <List>
                    {!this.props.playlists
                        ? <p>Não existem Playlists criadas!</p>
                        : <>{this.props.renderPlaylist}</>}
                </List>
            </Container>
        );
    }
}