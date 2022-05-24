import React from 'react';
import styled from 'styled-components';
import deleteImg from '../img/delete.png';
import editImage from '../img/edit.png';

const PlaylistContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 250px;
    max-width: auto;
    height: 40px;
    max-height: fit-content;

    div{
        /* border: 1px solid red; */
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        justify-items: center;
    }
    :hover{
        background-color: rgba(255, 127, 80, 0.7);
        color: black;
    }
    img{
        max-width: 40%;
        height: auto;
        background-color: rgba(255, 127, 80, 0.8);
        border-radius: 30%;
        cursor: pointer;
    }
`

export class Playlist extends React.Component {
    render() {
        return (
            <PlaylistContainer onClick={this.props.onClickShowPlaylist} >
                {this.props.name}
                <div>
                    <img src={editImage} onClick={this.props.onClickdeletePlaylist} />
                    <img src={deleteImg} onClick={this.props.onClickdeletePlaylist} />
                </div>
            </PlaylistContainer>
        )
    }
}