import axios from 'axios';
import React from 'react';
import { Container } from './styles';

export class InputMusics extends React.Component {
    render() {
        return (
            <Container>
                <input placeholder='Music name' value={this.props.bodyInput.name} 
                onChange={this.props.onChangeName} />
                <input placeholder='Artist name' value={this.props.bodyInput.artist} 
                onChange={this.props.onChangeArtist} />
                <input placeholder='Link' value={this.props.bodyInput.url} 
                onChange={this.props.onChangeUrl} />
                <button onClick={this.props.addTrackToPlaylist} >Add Music</button>
            </Container>
        );
    }
}