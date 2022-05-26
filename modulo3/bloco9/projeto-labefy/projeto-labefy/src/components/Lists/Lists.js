import axios from 'axios';
import React from 'react';
import { CardPlaylist } from '../CardPlaylist/CardPlaylist';
import { Musics } from '../Musics/Musics';
import { Playlists } from '../Playlists/Playlists';
import { Container } from './styles';

const urlPlaylist = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
const header = {
    headers: { Authorization: 'ana-cruz-hooks' }
}

export class Lists extends React.Component {
    state = {
        playlists: [],
        namePlaylistInput: '',
        musics: [],
        namePlaylistSelected: '',
        idPlaylistSelected: '',
        showPlaylistMusics: false,
        showInputMusics: false,
        bodyInput: {
            name: '',
            artist: '',
            url: ''
        },
        showAudioPLayer: true
    }

    componentDidMount() {
        this.getAllPlaylist()
    }

    getAllPlaylist = () => {
        axios.get(urlPlaylist, header)
            .then((res) => {
                const list = [...res.data.result.list]
                this.setState({ playlists: list })
            })
            .catch((err) => {
                alert('err getAllPlaylist', err.message)
                console.log('err getAllPlaylist', err)
            })
    }

    createPlaylist = () => {
        const body = {
            name: this.state.namePlaylistInput
        }
        axios.post(urlPlaylist, body, header)
            .then((res) => {
                this.setState({ namePlaylistInput: '' })
                alert(`Playlist ${this.state.namePlaylistInput} adicionada com sucesso!`)
                this.getAllPlaylist()
            })
            .catch((err) => {
                alert('Err CreatePlaylist', err.message)
                this.setState({ namePlaylistInput: '' })
                console.log("Err Create", err)
            })
    }

    deletePlaylist = (id) => {
        axios.delete(`${urlPlaylist}/${id}`, header)
            .then((res) => {
                this.setState({
                    showPlaylistMusics: false, showInputMusics: false,
                    namePlaylistSelected: ''
                })
                alert('Playlist deletada com sucesso')
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

    /*--------BOOLEANS--------*/
    showPlaylistMusics = (item) => {
        this.setState({
            showPlaylistMusics: true, showInputMusics: false,
            namePlaylistSelected: item.name, idPlaylistSelected: item.id,
            showAudioPLayer: false
        })
        this.getMusicsPlaylistId(item.id)
    }

    showInput = () => {
        this.setState({ showInputMusics: true })
    }

    /*--------ONCHANGE--------*/
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
        const renderPlaylist = this.state.playlists.map((item) => {
            return <CardPlaylist key={item.id} name={item.name}
                onClickShowPlaylist={() => this.showPlaylistMusics(item)}
                onClickdeletePlaylist={() => this.deletePlaylist(item.id)} />
        })

        return (
            <Container>
                <Playlists playlists={this.state.playlists}
                    renderPlaylist={renderPlaylist}
                    valueInput={this.state.namePlaylistInput}
                    onChangePlaylistName={this.onChangePlaylistName}
                    onClickCreatePlaylist={() => this.createPlaylist()} />

                {!this.state.showPlaylistMusics ? <></>
                    : <Musics musics={this.state.musics}
                    namePlaylistSelected={this.state.namePlaylistSelected} 
                    idPlaylistSelected={this.state.idPlaylistSelected}
                    showPlaylistMusics={this.state.showPlaylistMusics}
                    showInputMusics={this.state.showInputMusics}
                    showInput={this.showInput}
                    addTrackToPlaylist={() => this.addTrackToPlaylist(this.state.idPlaylistSelected)}
                    onChangeName={this.onChangeName} onChangeArtist={this.onChangeArtist}
                    onChangeUrl={this.onChangeUrl} bodyInput={this.state.bodyInput}
                    showAudioPLayer={this.state.showAudioPLayer} />
                }
            </Container>
        );
    }
}