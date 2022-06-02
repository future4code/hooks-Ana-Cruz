import React from 'react';
import { Container } from './styles';

export class InputPlay extends React.Component {
    render() {
        return (
            <Container>
                <input placeholder='Enter a playlist' value={this.props.valueInput}
                    onChange={this.props.onChangePlaylistName} />
                <button onClick={this.props.onClickCreatePlaylist} >Add Playlist</button>
            </Container>
        );
    }
}