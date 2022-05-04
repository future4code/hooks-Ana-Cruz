import React from 'react'
import { PostContainer, PostHeader, PostFooter, UserPhoto, PostPhoto} from './styled'

import { IconeComContador } from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'
import iconeSalvarBranco from '../../img/save-white.svg'
import iconeSalvar from '../../img/save.svg'
import iconeShare from '../../img/share.svg'
import { SecaoCompartlhar } from '../SecaoCompartilhar/SecaoCompartilhar'


class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
    numeroSalvos: 0,
    compartilhado: false
  }

  onClickCurtida = () => {
    if (this.state.curtido) {
      this.setState({
        curtido: !this.state.curtido,
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    } else {
      this.setState({
        curtido: !this.state.curtido,
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  onClickSalvo = () => {
    if (this.state.salvo) {
      this.setState({
        salvo: !this.state.salvo,
        numeroSalvos: this.state.numeroSalvos - 1
      })
    } else {
      this.setState({
        salvo: !this.state.salvo,
        numeroSalvos: this.state.numeroSalvos + 1
      })
    }
  }

  onClickCompartilhar = () => {
    this.setState({
      compartilhado: !this.state.compartilhado,
    })
    console.log(`state compartilhado: ${this.state.compartilhado}`)
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }


  render() {
    let iconeCurtida
    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario
    if (this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario} />
    }

    let iconeSalvo
    if (this.state.salvo) {
      iconeSalvo = iconeSalvar
    } else {
      iconeSalvo = iconeSalvarBranco
    }
    
    let componenteCompartilhar
    if(this.state.compartilhado){
      componenteCompartilhar = <SecaoCompartlhar/>
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'} />

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeComContador
          icone={iconeSalvo}
          onClickIcone={this.onClickSalvo}
          valorContador=""
        />

        <IconeComContador
          icone={iconeShare}
          onClickIcone={this.onClickCompartilhar}
          valorContador=""
        />
      </PostFooter>
      {componenteComentario}
      {componenteCompartilhar}
    </PostContainer>
  }
}

export default Post