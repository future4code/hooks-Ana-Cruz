import React from 'react';
import { MainContainer, Formulario } from './styled';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    listaPosts: [
      {
        usuario: "paulinha",
        fotoU: "https://picsum.photos/50/50",
        post: "https://picsum.photos/200/150"
      },
      {
        usuario: "carla",
        fotoU: "https://picsum.photos/50/51",
        post: "https://picsum.photos/200/151"
      },
      {
        usuario: "pedro",
        fotoU: "https://picsum.photos/50/52",
        post: "https://picsum.photos/200/152"
      }
    ],
    usuario: "",
    fotoU: "",
    post: ""
  }

  OnChangeUsuario(event) {
    this.setState({usuario: event.target.value})
  }

  OnChangeFotoUsuario(event) {
    this.setState({fotoU: event.target.value})
  }

  OnChangeFotoPost(event) {
    this.setState({post: event.target.value})
  }

  OnClickAdicionarPost() {
    const novaListaPost = 
    [...this.state.listaPosts,
    {
      usuario: this.state.usuario,
      fotoU: this.state.fotoU,
      post: this.state.post
    }
  ]
  this.setState({ listaPosts: novaListaPost, usuario: "", fotoU: "", post: "" })
  }

  render() {
    let arrayComponente = this.state.listaPosts.map(
      (item) => {
        return (
          <Post
            nomeUsuario={item.usuario}
            fotoUsuario={item.fotoU}
            fotoPost={item.post}
          ></Post>
        )
      }
    )

    return (
      <MainContainer>
        <Formulario>
          <h3>Novo Post</h3>
          <input
            value={this.state.usuario}
            onChange={(event) => this.OnChangeUsuario(event)}
            placeholder="Usuário" />
          <input
            value={this.state.fotoU}
            onChange={(event) => this.OnChangeFotoUsuario(event)}
            placeholder="Link Foto de Usuário" />
          <input
            value={this.state.post}
            onChange={(event) => this.OnChangeFotoPost(event)}
            placeholder="Link Foto do Post" />
            <button onClick={() => this.OnClickAdicionarPost()} >Adicionar</button>
        </Formulario>
        {arrayComponente}
      </MainContainer>
    );
  }
}

export default App;
