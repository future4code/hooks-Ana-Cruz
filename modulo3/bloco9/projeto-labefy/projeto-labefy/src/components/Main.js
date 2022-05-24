import axios from 'axios';
import React from 'react';
import { Footer, ImgContainer, MainContainer, TransparencyContainer, AllPlaylists, PlaylistsContainer, DetailPlaylist } from '../styled';
import { InputPlaylist } from './InputPlaylist';
import { Playlist } from './Playlist';
import addImage from '../img/add.png';
import { IputMusic } from './IputMusic';

const urlPlaylist = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
const header = {
    headers: { Authorization: 'ana-cruz-hooks' }
}

export class Main extends React.Component {
    state = {
        playlists: [],
        musics: [],
        namePlaylistSelected: '',
        idPlaylistSelected: '',
        namePlaylistInput: '',
        showPlaylist: false,
        showInput: false,
        bodyInput: {
            name: '',
            artist: '',
            url: ''
        }
    }

    componentDidMount() {
        this.getAllPlaylist()
    }

    getAllPlaylist = () => {
        axios.get(urlPlaylist, header)
            .then((res) => {
                const list = [...res.data.result.list]
                this.setState({ playlists: list })
                console.log('PLAYLIST', this.state.playlists)
            })
            .catch((err) => {
                alert('err getAllPlaylist', err.message)
                console.log('Err getAllPlaylist', err.message)
            })
    }

    createPlaylist = () => {
        const body = {
            name: this.state.namePlaylistInput
        }
        axios.post(urlPlaylist, body, header)
            .then((res) => {
                this.setState({ namePlaylistInput: '' })
                this.getAllPlaylist()
                alert(`Playlist ${this.state.namePlaylistInput} adicionada com sucesso!`)
            })
            .catch((err) => {
                alert(err.message)
                this.setState({ namePlaylistInput: '' })
            })
    }

    deletePlaylist = (id) => {
        axios.delete(`${urlPlaylist}/${id}`, header)
            .then((res) => {
                this.setState({ showPlaylist: false, showInput: false, namePlaylistSelected: '' })
                this.getAllPlaylist()
            })
            .catch((err) => {
                alert('Err deletePlaylist', err.message)
            })
    }

    getMusicsPlaylistId = (id) => {
        axios.get(`${urlPlaylist}/${id}/tracks`, header)
            .then((res) => {
                const list = [...res.data.result.tracks]
                this.setState({ musics: list })
            })
            .catch((err) => {
                alert('Err getMusicsPlaylistId', err.message)
            })
    }

    showPlaylist = (item) => {
        this.setState({ showPlaylist: true, showInput: false, namePlaylistSelected: item.name, idPlaylistSelected: item.id })
        this.getMusicsPlaylistId(item.id)
    }

    addTrackToPlaylist = (id) => {
        const body = { ...this.state.bodyInput }
        axios.post(`${urlPlaylist}/${id}/tracks`, body, header)
            .then((res) => {
                this.setState({ bodyInput: { ...this.state.bodyInput, name: '', artist: '', url: '' } })
                this.getMusicsPlaylistId(id)
                alert(`Musica ${this.state.bodyInput.name} adicionada com sucesso!`)
            })
            .catch((err) => {
                alert(err.message)
                this.setState({ bodyInput: { ...this.state.bodyInput, name: '', artist: '', url: '' } })
            })
    }

    showInput = () => {
        this.setState({ showInput: true })
    }

    onChangePlaylistName = (ev) => {
        this.setState({ namePlaylistInput: ev.target.value })
    }

    onChangeName = (ev) => {
        this.setState({ bodyInput: { ...this.state.bodyInput, name: ev.target.value } })
    }

    onChangeArtist = (ev) => {
        this.setState({ bodyInput: { ...this.state.bodyInput, artist: ev.target.value } })
    }

    onChangeUrl = (ev) => {
        this.setState({ bodyInput: { ...this.state.bodyInput, url: ev.target.value } })
    }

    render() {
        return (
            <ImgContainer>
                <TransparencyContainer>
                    <MainContainer>
                        <h1>Labefy &#9835; </h1>
                        <InputPlaylist value={this.state.namePlaylistInput}
                            onChangePlaylistName={this.onChangePlaylistName}
                            buttonCreatePlaylist={this.createPlaylist} />
                        <PlaylistsContainer>
                            <AllPlaylists>
                                <h2>Playlists</h2>
                                {!this.state.playlists ? <p>Não existem Playlists criadas!</p> :
                                    this.state.playlists.map((item) => {
                                        return <Playlist key={item.id} name={item.name}
                                            onClickShowPlaylist={() => this.showPlaylist(item)}
                                            onClickdeletePlaylist={() => this.deletePlaylist(item.id)} />
                                    })}
                            </AllPlaylists>
                            <DetailPlaylist>
                                {this.state.showPlaylist && <h2>{this.state.namePlaylistSelected}</h2>}
                                {(this.state.showPlaylist && !(this.state.musics.length > 0)) ? <p>Não contém músicas!</p> :
                                    this.state.musics.map((item, index) => {
                                        return <div key={index} ><p>{item.name} - {item.artist}</p></div>
                                    })}
                                {!this.state.showPlaylist ? <></> :
                                    (!this.state.showInput ? <img src={addImage}
                                        onClick={this.showInput} /> :
                                        <IputMusic onChangeName={this.onChangeName}
                                            onChangeArtist={this.onChangeArtist} onChangeUrl={this.onChangeUrl}
                                            addTrackToPlaylist={() => this.addTrackToPlaylist(this.state.idPlaylistSelected)}
                                            bodyInput={this.state.bodyInput} />)}
                            </DetailPlaylist>
                        </PlaylistsContainer>
                        <Footer><p>&copy; All rights reserved | 2022</p></Footer>
                    </MainContainer>
                </TransparencyContainer>
            </ImgContainer>
        );
    }
}