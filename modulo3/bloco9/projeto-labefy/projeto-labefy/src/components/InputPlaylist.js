import React from 'react';
import styled from 'styled-components'

const InputPlaylistContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
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

export class InputPlaylist extends React.Component {
    render() {
        return (
            <InputPlaylistContainer>
                <input placeholder='Playlist' value={this.props.value}
                    onChange={this.props.onChangePlaylistName} />
                <button onClick={this.props.buttonCreatePlaylist} >Add Playlist</button>
            </InputPlaylistContainer>
        )
    }
}