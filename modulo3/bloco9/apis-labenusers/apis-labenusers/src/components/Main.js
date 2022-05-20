import React from 'react';
import axios from 'axios';
import logo from '../img/logo.png'
import { ContainerMain, PageUsersList } from '../styles'
import { PageHome } from './PageHome';
import { PageUserList, UserList } from './UserList';
import { PageUser, User } from './User';


const urlUsers = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'


const header = {
    headers: {
        Authorization: 'ana-cruz-hooks'
    }
}


export class Main extends React.Component {
    state = {
        usersList: [],
        nameInput: '',
        emailInput: '',
        clicking: false,
        opening: false,
        userOpen: {}
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
        const body = {
            name: this.state.nameInput,
            email: this.state.emailInput
        }
        axios.post(urlUsers, body, header
        ).then((res) => {
            this.setState({ nameInput: '', emailInput: '', clicking: true })
            this.getAllUsers()
            alert(`O usuário foi adicionado com sucesso!`)
        }).catch((err) => {
            alert(err.message)
            this.setState({ nameInput: '', emailInput: '' })
        })
    }

    deleteUser = (id) => {
        //tive que usar window.confirm para evitar erro
        if (window.confirm(`Tem certeza que deseja deletar?`)) {
            axios.delete(`${urlUsers}/${id}`, header
            ).then((res) => {
                this.setState({ nameInput: '', emailInput: '', opening: false })
                this.getAllUsers()
                alert('Usuário deletado com sucesso')
            }).catch((err) => {
                this.setState({ nameInput: '', emailInput: '', opening: false })
                alert(err.message)
            })
        } else {
            alert('Usuário não foi deletado')
            this.setState({ nameInput: '', emailInput: '', opening: false })
        }
    }

    seeUsersList = () => {
        this.setState({ clicking: true })
    }

    showUser = (index) => {
        const thisUser = this.state.usersList[index]
        this.setState({ opening: true, userOpen: thisUser })
    }

    returnPageHome = () => {
        this.setState({ clicking: false, opening: false })
    }

    returnPageList = () => {
        this.setState({ clicking: true, opening: false })
    }

    onChangeName = (ev) => {
        this.setState({ nameInput: ev.target.value })
    }

    onChangeEmail = (ev) => {
        this.setState({ emailInput: ev.target.value })
    }

    // condição ? verdadeira : falsa
    render() {
        return (<ContainerMain>
            {(!this.state.clicking ? <PageHome logo={logo} state={this.state}
                onChangeName={this.onChangeName}
                onChangeEmail={this.onChangeEmail}
                onClickRegister={this.addNewUser}
                onClickSeeList={this.seeUsersList} />
                : <PageUsersList> {!this.state.opening ? <>
                    {this.state.usersList.map((user, index) => {
                        return (<UserList key={user.id}
                            onClickShowUser={() => this.showUser(index)}
                            onClickDeleteUser={() => this.deleteUser(user.id)} user={user} />)
                    })}
                    <button onClick={this.returnPageHome} >Return</button>
                </>
                    : <> <User name={this.state.userOpen.name}
                        onClickDeleteUser={() => this.deleteUser(this.state.userOpen.id)} />
                        <button onClick={this.returnPageList} >Return</button>
                    </>
                }
                </PageUsersList>)}
        </ContainerMain>
        );
    }
}
