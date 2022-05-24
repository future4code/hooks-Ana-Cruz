import React from 'react';
import axios from 'axios';
import logo from '../img/logo.png';
import { ContainerMain, InputStyled, PageUsersList, UserList } from '../styles';
import { PageHome } from './PageHome';
import { User } from './User';
import { PageUser, UserDetail } from './UserDetail';


const urlUsers = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'


const header = {
    headers: {
        Authorization: 'ana-cruz-hooks'
    }
}


export class Main extends React.Component {
    state = {
        usersList: [],
        clickSeeUserList: false,
        showUserDetails: false,
        showInput: false,
        userOpen: {
            id: '',
            name: '',
            email: ''
        },
        bodyInput: {
            name: '',
            email: ''
        },
        search: ''
    }


    componentDidMount = () => {
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios.get(urlUsers, header
        ).then((res) => {
            this.setState({ usersList: res.data })
        }).catch((err) => {
            alert(err.message)
        })
    }

    addNewUser = () => {
        const body = { ...this.state.bodyInput }
        axios.post(urlUsers, body, header
        ).then((res) => {
            this.setState({ bodyInput: { ...this.state.bodyInput, name: '', email: '' }, clickSeeUserList: true })
            this.getAllUsers()
            alert(`O usuário foi adicionado com sucesso!`)
        }).catch((err) => {
            alert(err.message)
            this.setState({ bodyInput: { ...this.state.bodyInput, name: '', email: '' } })
        })
    }

    deleteUser = (id) => {
        //tive que usar window.confirm para evitar erro
        if (window.confirm(`Tem certeza que deseja deletar?`)) {
            axios.delete(`${urlUsers}/${id}`, header
            ).then((res) => {
                this.setState({ bodyInput: { ...this.state.bodyInput, name: '', email: '' }, showUserDetails: false })
                this.getAllUsers()
                alert('Usuário deletado com sucesso')
            }).catch((err) => {
                this.setState({ bodyInput: { ...this.state.bodyInput, name: '', email: '' }, showUserDetails: false })
                alert(err.message)
            })
        } else {
            alert('Usuário não foi deletado')
            this.setState({ bodyInput: { ...this.state.bodyInput, name: '', email: '' }, showUserDetails: false })
        }
    }

    getUserById = (id) => {
        axios.get(`${urlUsers}/${id}`, header
        ).then((res) => {
            this.setState({ userOpen: res.data })
        }).catch((err) => {
            alert(err.message)
        })
    }

    editUser = (id) => {
        const body = { ...this.state.bodyInput }
        axios.put(`${urlUsers}/${id}`, body, header
        ).then((res) => {
            this.setState({ bodyInput: { ...this.state.bodyInput, name: '', email: '' }, showInput: false })
            this.getAllUsers()
            this.getUserById(id)
            alert('Usuário alterado com sucesso!')
        }).catch((err) => {
            alert(err.message)
            this.setState({ bodyInput: { ...this.state.bodyInput, name: '', email: '' } })
        })
    }

    showInputEdit = () => {
        this.setState({ showInput: true })
    }

    seeUsersList = () => {
        this.setState({ clickSeeUserList: true })
    }

    showUser = (id) => {
        this.getUserById(id)
        this.setState({ showUserDetails: true })
    }

    returnPageHome = () => {
        this.setState({ clickSeeUserList: false, showUserDetails: false })
    }

    returnPageList = () => {
        this.setState({ clickSeeUserList: true, showUserDetails: false, showInput: false })
    }

    onChangeName = (ev) => {
        this.setState({ bodyInput: { ...this.state.bodyInput, name: ev.target.value } })
    }

    onChangeEmail = (ev) => {
        this.setState({ bodyInput: { ...this.state.bodyInput, email: ev.target.value } })
    }

    onChangeSearch = (ev) => {
        this.setState({ search: ev.target.value })
    }

    // condição ? verdadeira : falsa
    render() {
        return (<ContainerMain>
            {!this.state.clickSeeUserList ? //Se TRUE
                <PageHome logo={logo} bodyInput={this.state.bodyInput}
                    onChangeName={this.onChangeName}
                    onChangeEmail={this.onChangeEmail}
                    onClickRegister={this.addNewUser}
                    onClickSeeList={this.seeUsersList} /> : //Se FALSE
                <PageUsersList>
                    {!this.state.showUserDetails ? //Sse true USER LIST
                        <> 
                            <InputStyled onChange={this.onChangeSearch}
                            value={this.state.search} placeholder='Search user' />
                            {this.state.usersList
                            .filter((user) => {
                                return user.name.toLocaleLowerCase().includes(
                                    this.state.search.toLocaleLowerCase())
                            })
                            .map((user) => {
                                return (<User key={user.id}
                                    onClickShowUser={() => this.showUser(user.id)}
                                    user={user} />)
                            })}
                            <button onClick={this.returnPageHome} >Return</button>
                        </> : //se false USER DETAIL
                        <>
                            <UserDetail user={this.state.userOpen}
                                onClickDeleteUser={() => this.deleteUser(this.state.userOpen.id)}
                                onClickEditUser={this.showInputEdit}
                                showInput={this.state.showInput}
                                bodyInput={this.state.bodyInput}
                                onChangeName={this.onChangeName}
                                onChangeEmail={this.onChangeEmail}
                                onClickRegister={() => this.editUser(this.state.userOpen.id)} />
                            <button onClick={this.returnPageList} >Return</button>
                        </>
                    }
                </PageUsersList>}
        </ContainerMain>
        );
    }
}
