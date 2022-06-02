import React from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import addImage from '../../img/add.png';
import { InputMusics } from '../InputMusics/InputMusics';
import { AudioPlayer, Container, Player, DivPlayer, List } from './styles';

const urlPlaylist = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
const header = {
    headers: { Authorization: 'ana-cruz-hooks' }
}

export class Musics extends React.Component {
    state = {
        showAudioPlayer: this.props.showAudioPLayer,
        musicPlayed: {
            id: '',
            name: '',
            artist: '',
            url: ''
        },
        bodyInput: {
            name: '',
            artist: '',
            url: ''
        }
    }

    deleteMusicFronPlaylist = (idTrack) => {
        axios.delete(`${urlPlaylist}/${this.props.idPlaylistSelected}/tracks/${idTrack}`, header)
        .then((res) => {
            this.setState({ showAudioPlayer: false })
            alert('Música deletada com sucesso')
            this.props.getMusicsPlaylistId(this.state.idPlaylistSelected)
        })
        .catch((err) => {
            alert('Err in deleteMusic:', err.message)
        })
    }

    showAudioPlayer = (item) => {
        this.setState({ showAudioPlayer: !this.state.showAudioPlayer, 
            musicPlayed: { ...item } })
    }

    returnToMusicsList = () => {
        this.setState({
            showAudioPlayer: !this.state.showAudioPlayer,
            musicPlayed: { ...this.state.musicPlayed, id: '', name: '', artist: '', url: '' }
        })
    }

    render() {
        const renderMusics = this.props.musics.map((item) => {
            return (<AudioPlayer key={item.id}>
                <div onClick={() => this.showAudioPlayer(item)} >
                    <p>{item.name}-{item.artist}</p>
                </div>
                <p onClick={() => this.deleteMusicFronPlaylist(item.id)} >X</p>
            </AudioPlayer>)
        })

        return (
            <Container>
                {(this.props.musics.length > 0)
                    ? <>
                        <h2>{this.props.namePlaylistSelected}</h2>
                        {!this.state.showAudioPlayer ? <List>{renderMusics}</List>
                            : <DivPlayer>
                                <p>{this.state.musicPlayed.name}-{this.state.musicPlayed.artist}</p>
                                <Player>
                                    <ReactPlayer url={this.state.musicPlayed.url}
                                        width='100%' height='auto' light='false' />
                                    <button onClick={this.returnToMusicsList} >Return to List</button>
                                </Player>
                            </DivPlayer>}
                    </>
                    : <> <h2>{this.props.namePlaylistSelected}</h2>
                        <p>Não contém músicas!</p> </>
                }

                {this.state.showAudioPlayer ? <></> :
                (!this.props.showInputMusics
                        ? <img src={addImage} alt='icone de adicionar' onClick={this.props.showInput} />
                        : <InputMusics onChangeName={this.props.onChangeName}
                            onChangeArtist={this.props.onChangeArtist} onChangeUrl={this.props.onChangeUrl}
                            addTrackToPlaylist={this.props.addTrackToPlaylist}
                            bodyInput={this.props.bodyInput} />)
                }
            </Container >
        );
    }
}