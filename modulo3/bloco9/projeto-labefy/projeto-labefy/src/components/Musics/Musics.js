import ReactPlayer from 'react-player'
import React from 'react';
import addImage from '../../img/add.png';
import { InputMusics } from '../InputMusics/InputMusics';
import { AudioPlayer, Container, Player, DivPlayer } from './styles';


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

    showAudioPlayer = (item) => {
        this.setState({ showAudioPlayer: true, musicPlayed: { ...item } })
    }

    returnToMusicsList = () => {
        this.setState({ showAudioPlayer: false, 
            musicPlayed: { ...this.state.musicPlayed, id: '', name: '', artist: '', url: '' } })
    }

    render() {
        const renderMusics = this.props.musics.map((item) => {
            return (<AudioPlayer key={item.id}>
                <div onClick={() => this.showAudioPlayer(item)} >
                    <p>{item.name}-{item.artist}</p>
                </div>
            </AudioPlayer>)
        })

        return (
            <Container>
                {(this.props.musics.length > 0)
                    ? <> <h2>{this.props.namePlaylistSelected}</h2>
                        {!this.state.showAudioPlayer ? renderMusics
                            : <DivPlayer>
                                <p>{this.state.musicPlayed.name}-{this.state.musicPlayed.artist}</p>
                                <Player>
                                    <ReactPlayer url={this.state.musicPlayed.url}
                                    width='100%' height='auto' />
                                    <button onClick={this.returnToMusicsList} >Return to List</button>
                                </Player>
                            </DivPlayer>
                        } </>
                    : <> <h2>{this.props.namePlaylistSelected}</h2>
                        <p>Não contém músicas!</p> </>
                }

                {
                    !this.props.showInputMusics
                        ? <img src={addImage} onClick={this.props.showInput} />
                        : <InputMusics onChangeName={this.props.onChangeName}
                            onChangeArtist={this.props.onChangeArtist} onChangeUrl={this.props.onChangeUrl}
                            addTrackToPlaylist={this.props.addTrackToPlaylist}
                            bodyInput={this.props.bodyInput} />
                }
            </Container >
        );
    }
}