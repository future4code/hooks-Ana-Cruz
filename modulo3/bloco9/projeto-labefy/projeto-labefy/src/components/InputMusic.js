import React from 'react';
import styled from 'styled-components';

const IputMusicContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    input{
        color: gray;
        border: none;
        border-bottom: 2px solid coral;
        background-color: transparent;
        margin-right: 10px;
    }
    button{
        background-color: coral;
        border-radius: 20%;
    }
    button:hover{
        background-color: transparent;
        border: 2px solid coral;
        color: gray;
    }
`

export class InputMusic extends React.Component {
    render() {
        return (
            <IputMusicContainer>
                <input placeholder='Music name' value={this.props.bodyInput.name} onChange={this.props.onChangeName} />
                <input placeholder='Artist name' value={this.props.bodyInput.artist} onChange={this.props.onChangeArtist} />
                <input placeholder='Link' value={this.props.bodyInput.url} onChange={this.props.onChangeUrl} />
                <button onClick={this.props.addTrackToPlaylist} >Add Music</button>
            </IputMusicContainer>
        )
    }
}